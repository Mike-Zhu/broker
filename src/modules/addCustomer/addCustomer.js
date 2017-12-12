import React, { Component } from 'react'
import Input from '../../components/input'
// import { Link } from 'react-router-dom'
// import Footer from '../../layout/footer'
// import JRfunction from '../../services/JRfunction'
import './customer.scss'

const addForm = [
    {
        title: "客户名称",
        placeholder: "请输入客户公司全称",
        key: "name",
        onChange:null,
    },
    {
        title: "所属行业",
        placeholder: "请输入行业",
        key: "industry",
        onChange:null,
    },
    {
        title: "对接人名称",
        placeholder: "请输入对接人名称",
        key: "docking",
        onChange:null,
    },
    {
        title: "手机号",
        key: "phone",
        placeholder: "请输入对接人常用手机号",
        onChange:null,
        required:true
    },
    {
        title: "车辆数",
        key: "carNumber",
        placeholder: "预计使用目标产品的车辆数",
        onChange:null,
    }
]

export default class AddCustomer extends Component{
    constructor(props){
        super();
        this.state = {
            name:"",
            industry:"",
            docking:"",
            phone:"",
            carNumber:"",
        }
        this.addForm = addForm;
    }

    onChange(data) {
        this.setState(data)
    }

    render(){
        return (
            <div className="addCustomer">
                <div className="page__hd">
                    <h1 className="page__title">
                        新增客户
                    </h1>
                    <p className="page__desc">
                        请填写您要新增的用户信息
                    </p>
                </div>
                <div className="weui-cells weui-cells_form mb15">
                    {this.addForm.map(res => {
                        return (<Input key={res.key} config = {res} value = {this.state[res.key]}/>)
                    })}

                    <div className="weui-cell weui-cell_select weui-cell_select-after">
                        <div className="weui-cell__hd">
                            <label className="weui-label">目标产品</label>
                        </div>
                        <div className="weui-cell__bd">
                            <select className="weui-select" >
                                <option value="1">保付通</option>
                                <option value="2">鲁通A卡</option>
                                <option value="3">鲁通B卡</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="weui-btn-area">
                    <a
                        className="weui-btn weui-btn_primary m1015"
                        onClick={() => this.updateInfo()}
                    >确定增加</a>
                </div>

                {/* <Footer config={{ style: this._style }} /> */}
            </div>
        )
    }
}