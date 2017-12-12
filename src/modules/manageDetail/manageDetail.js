import React, { Component } from 'react'
import './detail.scss'
import TextCell from '../../components/textCell'
import Footer from '../../layout/footer'
import { getInfo, createModule } from './controller'
import JRfunction from '../../services/JRfunction'

export default class ManageDetail extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    async componentDidMount() {
        const detail = await getInfo(this.props.history)
        const { search } = this.props.history.location
        const { year, month } = JRfunction.getUrlQuery(search)
        if (!Array.isArray(detail.data)) {
            return;
        }
        const { titleData, monthData } = createModule(detail.data[0]);
        this.setState({
            titleData,
            monthData,
            year,
            month
        })
    }

    _renderCells(props) {
        if (!Array.isArray(props)) {
            return;
        }
        return props.map(result => {
            return (<TextCell
                key={result.title}
                config={result}
                value={result.value}
            ></TextCell>)
        })
    }

    _renderContent(props) {
        if (!Array.isArray(props))
            return;
        return props.map((prop, index) =>
            (<div key={index} className="weui-cell">
                <div className="weui-cell__bd">
                    <div className="weui-cell__bd-title">客户</div>
                    <div className="weui-cell__bd-title" >通行车辆数</div>
                    <div className="weui-cell__bd-title">通行费</div>
                    {/* <div className="weui-cell__bd-title" >结算状态</div> */}
                </div>
                <div className="weui-cell__ft ">
                    <div>{prop.companyName}</div>
                    <div>{prop.cardNum}</div>
                    <div>¥ {prop.consumeAmount.toFixed(2)}</div>
                    {/* <div className={"weui-cell__bd-title " + returnClassName(prop.type)}>
                        {prop.type}
                    </div> */}
                </div>
            </div>)
        )

        // function returnClassName(type) {
        //     if (type === "已结清") {
        //         return "greenColor";
        //     } else {
        //         return "redColor";
        //     }
        // }
    }

    render() {
        return (
            <div>
                <div className="managedetail">
                    <div className="header">
                        <i className="iconfont icon-pieChart mr6"></i>
                        {this.state.year}年{this.state.month}月业绩详情
                    </div>
                    <div>
                        <div className="weui-cells">
                            <div className="weui-cell bbGrey weui-cell__bd greenColor">
                                详情汇总
                            </div>
                            {this._renderCells(this.state.titleData)}
                        </div>

                        <div className="weui-cells">
                            <div className="weui-cell bbGrey weui-cell__bd greenColor">
                                月账单明细
                            </div>
                            {this._renderContent(this.state.monthData)}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}