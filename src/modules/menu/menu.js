import React, { Component } from 'react'
import './menu.scss'
// import { Link } from 'react-router-dom'
import Footer from '../../layout/footer'
import {
    _initIdentity,
    _renderMenu,
    _gotoCusList,
    _gotoManagement,
    _cancelLogin
} from './menu.controller'
import { connect } from 'react-redux'
const menus = [
    {
        className: 'icon-folder_eople colorBlue',
        title: '客户管理',
        key: "customerList",
    },
    {
        className: 'icon-Performance colorGreen',
        title: '业绩管理',
        key: "management",
    },
    // {
    //     className: 'icon-contact-copy colorGreen',
    //     title: '专属联系人',
    //     key:"lianxiren",
    // }
]
class Menu extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

    }

    _menuPushState(type) {
        switch (type) {
            case "customerList":
                _gotoCusList.bind(this)();
                break;
            case "management":
                _gotoManagement.bind(this)();
                break;
            default:
                return;
        }
    }

    _footStyle = {
        textAlign: "center",
        padding: "25px 15px 15px"
    }

    async _cancelLogin() {
        const { history } = this.props;
        await _cancelLogin();
        localStorage.setItem("token", '');
        localStorage.setItem("tokenTime", '');
        history.push('login')
    }

    render() {
        return (
            <div className="menu ">
                <div className="weui-cell padding015 title">
                    {_initIdentity({ type: 'new' })}
                    <p>{this.props.brokerName}</p>
                    {/* <p className="smallp"> / 新晋经纪人</p> */}
                    <p
                        className="quit"
                        onClick={this._cancelLogin.bind(this)}
                    >
                        <i className="iconfont icon-logOut" ></i>
                        <span>退出</span>
                    </p>
                </div>
                <div className="details">
                    <div className="weui-cell__bd">
                        <p className="fz14">本月提成（元）</p>
                        <p className="number">
                            {this.props.newTotal > 0 ? '+' : ''}
                            {this.props.newTotal}</p>
                        <p className="fz14 explain">
                            历史累计提成&nbsp;
                            <span className="greenColor">{this.props.sumTotal}</span>
                            &nbsp;元
                        </p>
                    </div>

                </div>
                <div className="weui-cells">
                    <a className="weui-cell weui-cell_access"
                        onClick={_gotoCusList.bind(this)}
                    >
                        <div className="weui-cell__bd">
                            <span >总转化 / 推荐</span>
                        </div>
                        <div className="weui-cell__ft">{this.props.unConversion} / {this.state.conversion}</div>
                    </a>
                    <a href={`tel:${this.props.mobilePhone}`} className="weui-cell  weui-cell_access">
                        <div className="weui-cell__bd">
                            <span>市场联系人</span>
                        </div>
                        <div className="weui-cell__ft graycolor">
                            {this.props.saleName} | {this.props.mobilePhone}
                        </div>
                    </a>
                </div>
                <div className="weui-grids mt25">
                    {_renderMenu.bind(this)(menus)}
                </div>
                <Footer config={{ style: this._footStyle }} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.globalData
}
export default connect(mapStateToProps)(Menu);