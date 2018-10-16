import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.scss'
import Http from '../../services/http';
const FormItem = Form.Item;


class Login extends Component {
    constructor(props) {
        super(props);
    }
    api = {
        login: "api/adminLogin"
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                let { account, password } = values
                let { login } = this.api
                let { history } = this.props;

                // let res = Http.post(login, {
                //     account,
                //     password
                // })
                // let { token } = res
                // localStorage.setItem('token', token)
                history.push('wrongbanklist')
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                    {/* Or <a href="">register now!</a> */}
                </FormItem>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}
let LoginForm = Form.create()(Login)

export default connect(mapStateToProps)(LoginForm)