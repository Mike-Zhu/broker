import React, { Component } from 'react'
import './manage.scss'
import TextCell from '../../components/textCell'
import Footer from '../../layout/footer'
import { getMangeInfo, createModule, getDetailRoute } from './manage.controller'

export default class Management extends Component {
    constructor(props) {
        super();
        this.state = {
            manageInfo: []
        }
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

    async componentDidMount() {
        const manage = await getMangeInfo(this.props.history);
        if (!Array.isArray(manage.data)) {
            return;
        }
        const manageInfo = manage.data.map(createModule)
        this.setState({
            manageInfo
        })
    }

    checkDetail(data) {
        const { brokerCommissionId, year, month } = data
        const { history } = this.props;
        const search = getDetailRoute(history, {
            brokerCommissionId, year, month
        });
        history.push({
            pathname: "/manageDetail",
            search
        })

    }

    render() {
        return (
            <div>
                <div className="management">
                    <div className="header">
                        <i className="iconfont icon-Performance mr6"></i>
                        业绩管理
                    </div>
                    {
                        this.state.manageInfo.map(result => (
                            <div className="weui-cells" key={result.brokerCommissionId}>
                                <div className="weui-cell bbgrey">
                                    <div className="weui-cell__bd greenColor">
                                        {result.title}
                                    </div>
                                </div>
                                {
                                    this._renderCells(result.content)
                                }
                                <a onClick={
                                    () => {
                                        this.checkDetail(result)
                                    }
                                }
                                    className="weui-cell weui-cell_link"
                                >
                                    <div className="weui-cell__bd fz14">
                                        查看详情
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <Footer />
            </div>
        )
    }
}