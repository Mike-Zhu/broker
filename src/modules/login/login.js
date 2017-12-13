import React, { Component } from 'react'
import './login.scss'
import jinjiren from '../../static/images/jingjiren/jinjiren.png'
import {
    Link
} from 'react-router-dom'
import { bindInfo } from './login.controller'
import Alert from '../../services/alert'
import { action } from '../../store/store'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pwd: ''
        }

    }
    _changeValue($event, type) {
        this.setState({
            [type]: $event.target.value
        })
    }

    async _login() {
        const { name, pwd } = this.state;
        const { history } = this.props;
        if (!name) {
            Alert.alert('请输入账号');
            return;
        } else if (!pwd) {
            Alert.alert('请输入密码');
            return;
        };
        action({
            type:"Broker_login",
            payload:{
                name,
                pwd
            }
        })
        // const reponse = await bindInfo({ name, pwd });
        // if (reponse.type && reponse.type === 'wechat/access') {
        //     if(reponse.data.response && reponse.data.response.data){
        //         Alert.alert(reponse.data.response.data);
        //     }else{
        //         Alert.alert("登录错误，请重试");
        //     }
        //     return;
        // }
        // // const { data } = reponse;
        // // console.log(data)
        // if (reponse && reponse.token) {
        //     localStorage.setItem('globalData', JSON.stringify(reponse))
        //     localStorage.setItem('token', reponse.token)
        //     localStorage.setItem('tokenTime', new Date().getTime())
        // }
        // //存储
        // history.replace('menu')
    }

    render() {
        return (
            <div className="login">
                <img src={jinjiren} className="width80" alt="" />
                <h1
                    className="page__title system">
                    登录经纪人系统
                </h1>
                <p className="page__desc title" >
                    金润二当家
                </p>
                <div className="weui-cells weui-cells_form mb-15" >
                    <div className="weui-cell">
                        <div className="weui-cell__hd">
                            <label className="weui-label">用户名</label>
                        </div>
                        <div className="weui-cell__bd">
                            <input
                                className="weui-input" type="text"
                                value={this.state.account}
                                onChange={($event) => { this._changeValue($event, 'name') }}
                                placeholder="" />
                        </div>
                    </div>
                    <div className="weui-cell">
                        <div className="weui-cell__hd">
                            <label className="weui-label">密码</label>
                        </div>
                        <div className="weui-cell__bd">
                            <input
                                className="weui-input"
                                type="password"
                                value={this.state.password}
                                onChange={($event) => { this._changeValue($event, 'pwd') }}
                                placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="weui-btn-area">
                    {/* <Link
                        className="weui-btn weui-btn_primary"
                        to="/menu"
                    > */}
                    <a
                        onClick={this._login.bind(this)}
                        className="weui-btn weui-btn_primary">
                        登录
                    </a>

                    {/* </Link> */}
                </div>
                <p
                    className="page__desc login login" >
                    <Link to="/register" className='wechatColor'>注册</Link>
                    成为经纪人
                </p>
            </div >
        )
    }
}