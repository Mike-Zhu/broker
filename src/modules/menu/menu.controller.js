import React from 'react'
import JRfunction from '../../services/JRfunction'
import Http from '../../services/http'

export const _initIdentity = ({ type }) => {
    let icon;
    switch (type) {
        case "new":
            icon = (<i className="iconfont icon-tie iconJr new" ></i>)
            break;
        case "professer":
            icon = (<i className="iconfont icon-tie iconJr pro" ></i>)
            break;
        case "senior":
            icon = (<i className="iconfont icon-tie iconJr senior" ></i>)
            break;
        default:
            return;
    }
    return icon;
}
export function _renderMenu(menus) {
    const that = this;
    return menus.map(result => (
        <a onClick={() => that._menuPushState(result.key)} key={result.title} className="weui-grid">
            <div className="weui-grid__icon">
                <i className={"iconfont " + result.className} ></i>

            </div>
            <p className="weui-grid__label">{result.title}
            </p>
        </a>
    ))
}
export function _gotoCusList() {
    const { history } = this.props;
    // const url = JRfunction.setQuery('customerList', { a: 1 })
    history.push({
        pathname: "/customerList",
    });
}

export function _gotoManagement() {
    const { history } = this.props;
    const { brokerId } = this.state;
    const search = JRfunction.setQuery({ brokerId })
    history.push({
        pathname: "/management",
        search: search
    });
}

export function _cancelLogin() {
    const openId = localStorage.getItem('openId');
    const submitUrl = "wechat/access"
    let params = {
        openId
    };
    return Http.delete(submitUrl, params, 'access');
}
