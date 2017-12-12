import Http from '../../services/http'
export const bindInfo = async ({ name, pwd, $route }) => {
    const openId = localStorage.getItem('openId');
    const params = {
        name,
        pwd,
        openId
    };
    const submitUrl = "wechat/access";
    return await Http.post(submitUrl, params, "access")
}