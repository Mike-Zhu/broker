import JRfunction from '../../services/JRfunction'
import Http from '../../services/http';


export function createModule(data) {
    if (!data) {
        console.error('data不能为空！')
        return;
    }
    const { detailData, monthData } = data;
    const titleData = checkDetailData(detailData)
    // const content = checkMonthData(monthData)
    monthData.forEach(res => res.type = "已结清")
    return {
        titleData,
        monthData
    }
}


export function getInfo(history) {
    const { location: { search } } = history;
    const { brokerId, brokerCommissionId } = JRfunction.getUrlQuery(search);
    const url = `wechat/broker/achievement/${brokerId}/${brokerCommissionId}`;
    const type = "customer";
    return Http.get(url, {}, type)
}

function checkDetailData(detailData) {
    const keys = ['newTotal', 'status', 'carNum', 'amount']
    const detailObject = {
        newTotal: "本月提成",
        amount: "累计通行费",
        carNum: "累计通行车辆",
        status: "结算状态",
    }
    const classObject = {
        "未结清": "redColor",
        "发放": "greenColor",
    }
    return keys.map(result => {
        let value = detailData[result]
        if(result === "amount"){
            value = `￥${parseInt(value,10).toFixed(2)}`;
        }
        return {
            title: detailObject[result],
            value,
            labelClass: "weui-cell__bd weui-cell__bd-title",
            cntClass: `weui-cell__ft ${classObject[value] || ''}`
        }
    })
}

// function checkMonthData(data){
//     if(!Array.isArray(data)){
//         console.error('月明细账单 is not Array！')
//     }

//     return data.map(result => {
//         return {

//         }
//     })
// }