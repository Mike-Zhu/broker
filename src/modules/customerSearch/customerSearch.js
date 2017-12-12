import React, { Component } from 'react'
import Input from '../../components/input';
import Select from '../../components/select';
import '../customerList/list.scss'
import JRfunction from '../../services/JRfunction'

export default class CustomerSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerName: "",//客户名称
            startTime: "",//开始时间
            endTime: "",//结束时间
            productName: "",//产品名称
        }
    }
    _updateName(data) {
        this.setState(data)
    }
    _enter() {
        const { state } = this;
        const { history } = this.props;

        history.push({
            pathname: `/customerList`,
            search: JRfunction.setQuery(state),
        })
    }

    searchInput = {
        placeholder: "请输入客户名称",
        title: "客户名称",
        key: "customerName",
        callback: this._updateName.bind(this)
    }

    searchSelect = {
        title: "目标产品",
        key: "productName",
        source: [
            { id: "浙江省高速公路货车支付记账卡", value: "浙江省高速公路货车支付记账卡" },
        ],
        isEmpty: true,
        callback: this._updateName.bind(this)
    }

    startTime = {
        title: "推荐时间从",
        type: 'date',
        key: "startTime",
        callback: this._updateName.bind(this)
    }

    endTime = {
        title: "到",
        type: 'date',
        key: "endTime",
        callback: this._updateName.bind(this)
    }

    render() {
        return (
            <div className="costomerList">
                <div className="title">
                    <i className="iconfont icon-folder_eople mr6"></i>
                    客户搜索
                </div>
                <div className="weui-cells">
                    <Input config={this.searchInput} value={this.state.name} />
                    <Select config={this.searchSelect} value={this.state.productName} />
                    <Input config={this.startTime} value={this.state.startTime} />
                    <Input config={this.endTime} value={this.state.endTime} />
                </div>
                <div className="weui-btn-area">
                    <a
                        onClick={this._enter.bind(this)}
                        className="weui-btn weui-btn_primary">
                        搜索
                    </a>
                </div>
            </div>
        )
    }
}