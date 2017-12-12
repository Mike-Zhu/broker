import React, { Component } from 'react'


export default class TextCell extends Component {
    constructor(props) {
        super();
        const { value } = props;
        if (!props.config) {
            console.error(`value为${value}组件渲染时confg不能为空`)
            this.state = {
                value,
                title:"error",
            };
            return;
        }
        const { title, cntClass,labelClass } = props.config;
        this.state = {
            value,
            title,
            cntClass,
            labelClass
        };
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        if (!nextProps.config) {
            console.error(`value为${value}组件渲染时confg不能为空`)
            return;
        }
        const { cntClass ,labelClass} = nextProps.config;
        this.setState({
            value,
            cntClass,
            labelClass
        })
    }

    render() {
        return (<div className="weui-cell">
            <div className={this.state.labelClass || "weui-cell__hd"}>
                <label className="weui-label">
                    {this.state.title}
                </label>
            </div>
            <div className={this.state.cntClass || "weui-cell__bd"}>
                {this.state.value}
            </div>
        </div>)
    }
}