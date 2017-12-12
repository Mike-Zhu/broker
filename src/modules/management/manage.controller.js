import JRfunction from '../../services/JRfunction'
import Http from '../../services/http';

const initData = {
    title: "",
    content: []
}

export function createModule(data) {
    const { month, brokerCommissionId } = data;
    if (!month) {
        return initData;
    }
    const [Year, Month] = month.split('-');
    const title = `${Year}年${Month}月业绩`;
    const content = ['newTotal', 'carNum', 'amount'];
    const titleContent = {
        "newTotal": "本月提成",
        "carNum": "累计通行车辆",
        "amount": "累计通行费",
    }

    return {
        title,
        brokerCommissionId,
        year:Year,
        month:Month,
        content: content.map(result => {
            let value = data[result]
            if (result === "amount") {
                value = `￥${parseInt(value, 10).toFixed(2)}`
            }
            return {
                title: titleContent[result],
                value,
                labelClass: "weui-cell__bd weui-cell__bd-title",
                cntClass: `weui-cell__ft ${result || 'greenColor'}`
            }
        })
    }
}

export function getMangeInfo(history) {
    const { location: { search } } = history;
    if (!search) {
        return 'error';
    }
    const { brokerId } = JRfunction.getUrlQuery(search);
    const url = `wechat/broker/achievement/${brokerId}/0`;
    const type = "customer";
    return Http.get(url, {}, type)
}

export function getDetailRoute(history, { brokerCommissionId, year, month }) {
    const { location: { search } } = history;
    const { brokerId } = JRfunction.getUrlQuery(search);
    const searchInfo = JRfunction.setQuery({
        brokerId,
        brokerCommissionId,
        year,
        month
    })
    return searchInfo
}