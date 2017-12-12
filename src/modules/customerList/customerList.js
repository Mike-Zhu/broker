import React, { Component } from 'react'
import './list.scss'
import Footer from '../../layout/footer'
import { customerType, getCustomer } from './customerData'
import JRfunction from '../../services/JRfunction'

export default class CustomerList extends Component {
    constructor() {
        super();
        this.state = {
            customeArray: []
        }
        this.initData = {
            page: 1,
            limit: 10
        }
    }

    async componentDidMount() {
        const global = JSON.parse(localStorage.getItem('globalData'));
        const { conversion, unConversion } = global;

        const { search } = this.props.history.location;
        const searchData = JRfunction.getUrlQuery(search);
        const customeArray = await this._getCustomer(searchData);
        this.setState({
            conversion,
            customeArray,
            unConversion
        })
        // const id = this.props.params
        // console.log(this.props)
    }

    async _getCustomer(search) {
        const { customerName, endTime, startTime, productName } = search;
        const { page, limit } = this.initData;
        const customerList = await getCustomer({ 
            page, limit,//基础条件
            customerName,
            endTime,
            startTime, 
            productName,//查询条件
         });
        return this.state.customeArray.concat(customerList.data);
    }

    _initCusTitle() {
        //<!--客户对应产品循环结束-->
        return (
            <div className="weui-cells">
                <div className="weui-cell">
                    <div className="weui-cell__bd greenColor fz22">
                        <p>客户推荐</p>
                    </div>
                </div>
                <div className="weui-cell ">
                    <div className="weui-cell__bd">
                        <span>总转化 / 推荐</span>
                    </div>
                    <div className="weui-cell__ft">{this.state.unConversion} / {this.state.conversion}</div>
                </div>
            </div>
        )
    }
    _getDeatil(data) {
        // console.log(data);
        const { history } = this.props;
        const { type, id } = data;
        const key = `customerId_${id}`;
        const JSONdata = JSON.stringify(data);
        sessionStorage.setItem(key, JSONdata)
        history.push({
            pathname: `/customerDetail/${id}`,
            search: JRfunction.setQuery({ type }),
        })
        //    to={"?type="}
    }

    _gotoSearch() {
        const { history } = this.props;
        history.push({
            pathname: "/customerSearch",
            search: '?',
            state: { some: 1, poi: 2 }
        })
    }

    _renderCustomer(props) {
        //单条客户信息开始
        if (!Array.isArray(props)) {
            return;
        }

        return props.map((prop, index) => {
            const { status, customerName } = prop;
            const { className, text, type } = customerType[status] || {};
            prop.type = type;
            return (
                <div onClick={() => this._getDeatil(prop)} className="weui-cells" key={index}>
                    <a className="weui-cell weui-cell_access">
                        <div className="weui-cell__bd mr10">
                            <p>{customerName}</p>
                        </div>
                        <div className={"weui-cell__ft " + className}>{text}</div>
                    </a>
                </div>)
        })
    }

    render() {
        return (
            <div className="costomerList">
                <div className="title">
                    <i className="iconfont icon-folder_eople mr6"></i>
                    客户管理
                    <a onClick={this._gotoSearch.bind(this)} className="weui-btn weui-btn_mini weui-btn_primary right15">搜索</a>
                </div>
                <div>
                    {this._initCusTitle()}
                    {this._renderCustomer(this.state.customeArray)}
                    <Footer />
                </div>
                {/* <div className="weui-btn-area bottom-button">
                    <Link to="/addCustomer" className="weui-btn weui-btn_primary">
                        新增客户
                    </Link>
                </div> */}
            </div>
        )
    }
}