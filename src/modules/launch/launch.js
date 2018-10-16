import React, { Component } from 'react'
import Http from '../../services/http'

const getOpenId = (code) => {
    const url = "wechat/server/openid"
    const params = {
        code
    }
    return Http.get(url, params)
}

export default class Launch extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        // const search = window.location.search
        // const { code } = JRfunction.getUrlQuery(search);
        // const response = await getOpenId(code);
        const { history } = this.props;
        // const openId = localStorage.getItem('openId')
        // if(typeof response === 'string'){
        //     if(response !== openId){
        //         localStorage.setItem('openId', response)
        //         history.replace('login')
        //     }else{
        //         history.replace('menu')
        //     }
            
        // }else{
            history.replace('login')
        // }
    }

    render() {
        return (<div></div>)
    }
}