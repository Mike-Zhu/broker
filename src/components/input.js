import React, { Component } from 'react'


export default class Input extends Component {
    constructor(props) {
        super();
        const { value } = props;
        if(!props.config){
            console.error('Input组件的config不能为空')
            this.state = {};
            return;
        }
        const { placeholder, title, required ,type = "text"} = props.config;
        this.state = {
            value,
            placeholder,
            title,
            required,
            type
        };
        const noop = () => { }
        this.callback = props.config.callback || noop;
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        this.setState({
            value
        });
    }

    handleChange(event) {
        const { value } = event.target;
        const { key } = this.props.config
        this.setState({
            value
        });
        this.callback.call(null, { [key]: value })
    }

    render() {
        const isRequired = (required) => {
            if(required){
                return (
                    <span className = "required">*</span>
                )
            }
        }
        return <div className="weui-cell">
            <div className="weui-cell__hd">
                <label className="weui-label">
                    {this.state.title}
                    {isRequired(this.state.required)}
                </label>
            </div>
            <div className="weui-cell__bd">
                <input
                    className="weui-input"
                    placeholder={this.state['placeholder']}
                    type={this.state.type}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        </div>
    }
}