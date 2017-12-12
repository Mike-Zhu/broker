import React, { Component } from 'react'
import '../detail.scss'
// import { Link } from 'react-router-dom'
import Footer from '../../../layout/footer'
// import Input from '../../../components/input'
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
        title: "目标产品",
        key: "productName",
        placeholder: "请输入车辆数",
    },
    // {
    //     title: "提交时间",
    //     key: "plateNumber1",
    // }
]
export default class Process extends Component {
    constructor(props) {
        super();
        this.state = props.config.state;

        processOne.forEach(res => {
            res.callback = this.onChange.bind(this);
        })
        this.processOne = processOne
    }
    componentDidMount() {
        // console.log(this.state)
    }

    componentWillReceiveProps(nextProps) {
        
    }

    onChange(data) {
        this.setState(data)
    }


    updateInfo() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="process">
                <div className="page__hd">
                    <h1 className="page__title">
                        客户详情
                        <span className="redColor">（转化中）</span>
                    </h1>
                    <p className="page__desc">
                        客户正在转化中。
                    </p>
                </div>
                <div className="weui-cells weui-cells_form mb15">
                    {this.processOne.map(res => {
                        return (<TextCell key={res.key} config = {res} value = {this.state[res.key]}/>)
                    })}

                    {/* <div className="weui-cell ">
                        <div className="weui-cell__hd">
                            <label className="weui-label">办卡进度</label>
                        </div>
                        <div className="weui-cell__bd greenColor">
                            风控审核
                            <div className="weui-textarea-counter tr0"><span>3</span>/5</div>
                        </div>
                    </div> */}

                </div>
                {/* <a
                    className="weui-btn weui-btn_primary m1015"
                    onClick={() => this.updateInfo()}
                >更新信息</a> */}
                {/* <a className="weui-btn weui-btn_default m1015" >取消转化</a> */}
                <Footer config={{ style: this._style }} />
            </div>
        )
    }
}