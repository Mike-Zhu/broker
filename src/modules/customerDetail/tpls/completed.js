import React, { Component } from 'react'
import '../detail.scss'
// import { Link } from 'react-router-dom'
import Footer from '../../../layout/footer'
import TextCell from '../../../components/textCell'

const processOne = [
    {
        title: "客户名称",
        key:"customerName",
    },
    {
        title: "所属行业",
        key:"industry",
    },
    {
        title: "对接人",
        key:"dockingPerson",
    },
    {
        title: "手机号",
        key:"dockingCall",
    },
    {
        title: "车辆数",
        key:"plateNumber",
    },
    {
        title: "通过产品",
        key:"productName",
    },
    // {
    //     title: "提交时间",
    //     key:"plateNumber",
    // },
    // {
    //     title: "通过时间",
    //     key:"plateNumber",
    // },
]
export default class Completed extends Component {
    constructor(props) {
        super();
        this.state = props.config.state
    }
    componentDidMount() {

    }
    _style = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center"
    }
    render() {
        return (
            <div className="process">
                <div className="page__hd">
                    <h1 className="page__title">
                        客户详情
                    <span className="greenColor">（已转化）</span>
                    </h1>
                    <p className="page__desc">
                        恭喜
                        <span aria-label="congra" role="img">🎉</span>
                        ，客户已通过审核，开始获得提成。
                    </p>
                </div>
                <div className="weui-cells weui-cells_form mb15">
                    {processOne.map(result => (
                        <TextCell key = {result.title } config={result} value = {this.state[result.key]}/>
                        )
                    )}
                </div>
                <Footer config={{ style: this._style }} />
            </div>
        )
    }
}