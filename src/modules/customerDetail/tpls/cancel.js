import React, { Component } from 'react'
import '../detail.scss'
import Footer from '../../../layout/footer'
import TextCell from '../../../components/textCell'

const processOne = [
    {
        title: "客户名称",
        placeholder: "请输入客户名称",
        key: "customerName",
    },
    {
        title: "所属行业",
        placeholder: "请输入行业",
        key: "industry",
    },
    {
        title: "对接人",
        placeholder: "请输入对接人",
        key: "dockingPerson",
    },
    {
        title: "手机号",
        key: "dockingCall",
        placeholder: "请输入手机号",
    },
    {
        title: "车辆数",
        key: "plateNumber",
        placeholder: "请输入车辆数",
    },
    {
        title: "通过产品",
        key:"productName",
        placeholder: "车辆产品",
    },
]
export default class Cancel extends Component {
    constructor(props) {
        super();
        this.state = {}
        processOne.forEach(res => {
            //input回调函数
            res.callback = this.onInputChange.bind(this);
        })
        this.state = {
            name:'',
            industry:'',
            docking:'',
            phone:'',
            carNumber:'',
        }
        this.state = props.config.state;        
        this.processOne = processOne;
    }
    componentDidMount() {
        this.setState({
            name :"cancel"
        })
    }

    onInputChange(data) {
        this.setState(data)
    }
    
    updateInfo(){

    }
    render() {
        return (
            <div className="process">
                <div className="page__hd">
                    <h1 className="page__title">
                        客户详情
                        <span className="graycolor">（已取消）</span>
                    </h1>
                    <p className="page__desc">
                        客户转化没有成功，您可以和联系人沟通后确定是否重新转化。
                    </p>
                </div>
                <div className="weui-cells weui-cells_form mb15">
                    {this.processOne.map(res => {
                        return (<TextCell key={res.key} config = {res} value = {this.state[res.key]}/>)
                    })}
                </div>
                {/* <a className="weui-btn weui-btn_primary m1015" onClick = {() => this.updateInfo()}>重新提交</a> */}
                <Footer />
            </div>
        )
    }
}