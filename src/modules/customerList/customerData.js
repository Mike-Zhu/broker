import Http from "../../services/http";

export const customerType = {
    "未转化": {
        className: "redColor",
        type: "process",
        text: "转化中"
    },
    "已转化": {
        className: "greenColor",
        type: "completed",
        text: "已转化"
    },
    "取消": {
        className: "",
        text: "已取消",
        type: "cancel"
    },
}

export function getCustomer({ page, limit, customerName, startTime, endTime,productName }) {
    const start = (page - 1) * limit;
    const url = 'wechat/broker/customer'
    const openId = localStorage.getItem('openId')
    const params = {
        start,
        limit,
        openId,
        customerName,
        startTime,
        endTime,
        productName
    }
    return Http.get(url, params, 'customer')
}