import axios from 'axios'
// import urlService from './urlService'

//测试地址
const host = {
    initHost : "http://uat.jrerdangjia.com/",
    access:"https://uat.jrerdangjia.com:9672/",
    customer:"https://uat.jrerdangjia.com:9672/",
    imgload:"https://uat.jrerdangjia.com:9862/"
}
//正式地址
// const host = "http://uat.jrerdangjia.com";

const getInitUrl = (url, type) => {
    const hostUrl = host[type];
    return `${hostUrl}${url}`;
}

export default class Http {
    static get(url, params, type = "initHost") {
        const token = localStorage.getItem('token');
        const initUrl = getInitUrl(url, type);
        return axios({
            method: "get",
            url: initUrl,
            params: params,
            data: "312",
            headers: {
                'Authorization': `${token}`,
                'Content-Type': "application/json"
            },
        })
        .then(res => res.data)
        .catch((error) => {
            return {
                type:url,
                data:error
            }
        })
    }

    static post(url, params, type = "initHost") {
        const token = localStorage.getItem('token');
        const initUrl = getInitUrl(url, type);
        return axios({
            method: "post",
            url: initUrl,
            data: params,
            headers: { 'Authorization': `${token}` },
        })
        .then(res => res.data)
        .catch((error) => {
            console.log(error)
            return {
                type: url,
                data: error
            }
        })
    };

    static delete(url, params, type = "initHost") {
        const token = localStorage.getItem('token');
        const initUrl = getInitUrl(url, type);

        return axios({
            method: "delete",
            url: initUrl,
            params: params,
            headers: { 'Authorization': `${token}` },
        }).catch((error) => {
            console.log(error)
            return {
                type: url,
                data: error
            }
        })
    }
}