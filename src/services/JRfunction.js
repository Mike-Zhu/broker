export default class JRfunction {
    static getUrlQuery(url) {
        let theRequest = {};
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            const strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                let key = strs[i].split("=")[0],
                    value = decodeURI(strs[i].split("=")[1]);
                theRequest[key] = value
            }
        };
        return theRequest;
    }

    static getWechatLocation(hash) {
        const { origin, pathname } = window.location;
        const redirectUrl = origin + pathname + '#/' + hash;
        const urlenCode = encodeURIComponent(redirectUrl);
        const appid = "wx6e564994ca68244b"; //测试
        // const appid = "wx2880589f92550600"; //正式
        const url = `https://open.weixin.qq.com/connect/oauth2/authorize?`
            + `appid=${appid}&`
            + `redirect_uri=${urlenCode}`
            + `&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
        return url;
    }

    // static getQurry() {

    // }

    static setQuery( params) {
        let search = '?',
            keyArr = Object.keys(params);
        keyArr.forEach((res, index) => {
            if (index === 0) {
                search = `${search}${res}=${params[res]}`;
            } else {
                search = `${search}&${res}=${params[res]}`;
            }
        });
        return search;
    }
}