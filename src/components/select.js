import React, { Component } from 'react'


export default class Select extends Component {
    constructor(props) {
        super();
        const { value } = props;
        if (!props.config) {
            console.error('Input组件的config不能为空')
            this.state = {};
            return;
        }
        const {
            placeholder,
            title,
            required,
            disabled,
            source = [],
            isEmpty
        } = props.config;

        if (isEmpty) {
            source.unshift({
                id: '',
                value: ""
            })
        }

        this.state = {
            value,
            placeholder,
            title,
            required,
            disabled,
            source
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
        console.log(value)
        const { key } = this.props.config
        this.setState({
            value
        });
        this.callback.call(null, { [key]: value })
    }

    render() {
        // const isRequired = (required) => {
        //     if(required){
        //         return (
        //             <span className = "required">*</span>
        //         )
        //     }
        // }
        return (<div className="weui-cell weui-cell_select weui-cell_select-after">
            <div className="weui-cell__hd">
                <label className="weui-label">{this.state.title}</label>
            </div>
            <div className="weui-cell__bd">
                <select
                    className="weui-select"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.value}
                >
                    {
                        this.state.source.map(res =>
                            (<option key={res.id} value={res.id}>{res.value}</option>)
                        )
                    }
                </select>
            </div>
        </div>)
    }
}