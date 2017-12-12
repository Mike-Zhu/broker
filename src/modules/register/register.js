import React, { Component } from 'react'
import './register.scss'
import jinjiren from '../../static/images/jingjiren/jingjiren.jpg'
import { basicCells, extraCells } from './initParams'
import { uploadImg, checkEnter, postRegister } from './imgUpload'
import Input from '../../components/input'
import Alert from '../../services/alert'

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            useCode: '',
            pwd: '',
            rptPwd: '',
            name: '',
            companyName: '',
            bankAccount: '',
            phone: '',
            channel: '',
            imgArray: []
        }
        this.basicCells = basicCells.map(res => {
            res.callback = this._changeValue.bind(this)
            return res
        })
        this.extraCells = extraCells.map(res => {
            res.callback = this._changeValue.bind(this)
            return res
        })
    }

    _changeValue(data) {
        this.setState(data)
    }

    async _upload($event) {
        let { imgArray } = this.state;
        imgArray = await uploadImg($event, imgArray)
        this.setState({ imgArray })
    }

    async enterRegister() {
        const { state } = this;
        const { history } = this.props;
        const {
            pwd,
            rptPwd,
        } = state;

        let basicCheck = true,
            extraCheck = true;
        //检查3项，身份证，2个必填
        basicCheck = checkEnter(this.basicCells, state)
        if (!basicCheck) {
            return;
        }

        extraCheck = checkEnter(this.extraCells, state)
        if (!extraCheck) {
            return;
        }

        if (rptPwd !== pwd) {
            Alert.alert("请两次输入相同的密码")
            return
        }

        if (state.imgArray.length !== 2) {
            Alert.alert("请上传身份证正反面照片！")
            return
        }

        const response = await postRegister(state)
        if(response.type){
            Alert.alert(response.data.response.data);
            return;
        }
        Alert.alert("注册成功！")
        history.push('login')
        // console.log(response);

    }
    _renderSubmit() {
        let submitDom
        if (this.state.imgArray.length < 2) {
            submitDom = <div onChange={($event) => this._upload($event)} className="weui-uploader__input-box">
                <input className="weui-uploader__input" type="file" accept="image/*" multiple="" />
            </div>
        }
        return submitDom;
    }

    render() {
        return (
            <div className="register">
                <img src={jinjiren} className='banner' alt="经纪人" />
                <div className="weui-cells weui-cells_form mb15">
                    {this.basicCells.map(res => {
                        return (<Input key={res.key} config={res} value={this.state[res.key]} />)
                    })}
                </div>
                <div className="weui-cells weui-cells_form">
                    {this.extraCells.map(res => {
                        return (<Input key={res.key} config={res} value={this.state[res.key]} />)
                    })}

                    <div className="weui-cell ">
                        <div className="weui-cell__bd">
                            <div className="weui-uploader">
                                <div className="weui-uploader__hd">
                                    <p className="weui-uploader__title">身份证正反面<span className='required'>*</span></p>
                                    <div className="weui-uploader__info">{this.state.imgArray.length}/2</div>
                                </div>
                                <div className="weui-uploader__bd">
                                    <ul className="weui-uploader__files">
                                        {this.state.imgArray.map((res, index) => (
                                            <img className="weui-uploader__file" key={index} src={res.src} alt="" />)
                                        )
                                        }

                                        {/* <ImgUpload config={{ type: "success" }} /> */}
                                    </ul>
                                    {this._renderSubmit()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weui-btn-area">
                    <a onClick={this.enterRegister.bind(this)} className="weui-btn weui-btn_primary">欢迎加入创收大军</a>
                </div>
            </div>
        )
    }
}
