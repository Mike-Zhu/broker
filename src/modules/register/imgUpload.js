// import React, { Component } from 'react'
import './register.scss'
import * as Lrz from 'lrz'
import Http from '../../services/http'
import Alert from '../../services/alert'


export async function uploadImg($event, imgArray) {
    let src, url = window.URL || window.webkitURL || window.mozURL,
        files = $event.target.files;
    let file;
    for (let i = 0, len = files.length; i < len; ++i) {
        file = files[i];
        if (url) {
            src = url.createObjectURL(file);
        } else {
            src = $event.target.result;
        }
    }
    const sucData = await resizeImg(file);
    const data = Array.isArray(sucData) ? sucData[0] : sucData
    if(data.type && data.type === "upload/broker/idcard"){
        Alert.alert("上传图片失败，请重新上传！")
        return imgArray
    }
    imgArray.push(
        { src, data }
    )
    return imgArray
}
export function checkEnter(cells, state) {
    let basicCheck = true;
    for (let i = 0; i < cells.length; i++) {
        let { key, required, title } = cells[i];
        if (required && !state[key]) {
            Alert.alert(`${title}不能为空！`)
            basicCheck = false;
            break;
        }
    }
    return basicCheck
}

export async function postRegister(state) {
    const {
        useCode,
        pwd,
        name,
        companyName,
        bankAccount,
        phone,
        channel,
        imgArray
    } = state;
    const files = imgArray.map(res => res.data.id).join(',')
    // console.log(files, imgArray)
    const url = "broker"
    const params = {
        useCode,
        pwd,
        name,
        companyName,
        bankAccount,
        phone,
        channel,
        files
    }
    // return { params }
    return Http.post(url, params, 'access')
}
async function resizeImg(file) {
    let res = await Lrz(file, {});
    if (!res.formData) {
        Alert.alert("图片压缩失败！");
        return
    }
    return Http.post("upload/broker/idcard", res.formData, 'access')
}



//图片上传，增加render颗粒控制
// export default class ImgUpload extends Component{
//     constructor(props){
//         super();
//         this.state = {...props.config}
//     }
//     render(){
//         const {type} = this.state;
//         let returnDom;
//         switch (type) {
//             case 'success':
//                 returnDom = (<li className="weui-uploader__file emptyFile"></li>)
//                 break;
//             case 'process':
//                 returnDom = (<li className="weui-uploader__file weui-uploader__file_status emptyFile">
//                             <div className="weui-uploader__file-content">{this.state.percent}%</div>
//                         </li>)
//                 break;
//             case 'fail':
//                 returnDom = (<li className="weui-uploader__file weui-uploader__file_status emptyFile">
//                             <div className="weui-uploader__file-content">
//                                 <i className="weui-icon-warn"></i>
//                             </div>
//                         </li>)
//                 break;
//             default:
//                 returnDom = "";
//                 break;
//         }
//         return returnDom;

//     }
// }