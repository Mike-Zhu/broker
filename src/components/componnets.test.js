import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';

const inputArr = [
    {
        title: "客户名称",
        placeholder: "请输入客户公司全称",
        key: "name",
        onChange: null,
    },
    {
        title: "所属行业",
        placeholder: "请输入行业",
        key: "industry",
        onChange: null,
    },
    {
        title: "对接人名称",
        placeholder: "请输入对接人名称",
        key: "docking",
        onChange: null,
    },
    {
        title: "手机号",
        key: "phone",
        placeholder: "请输入对接人常用手机号",
        onChange: null,
        required: true
    },
    {
        title: "车辆数",
        key: "carNumber",
        placeholder: "预计使用目标产品的车辆数",
        onChange: null,
    },
    {
        placeholder: "请输入客户名称",
        title: "客户名称",
        key: "customerName",
        callback: null
    },
    {
        title: "推荐时间从",
        type: 'date',
        key: "startTime",
        callback: null
    },
    {
        title: "真实姓名",
        required: true,
        placeholder: "请输入您的真实姓名",
        key: "name"
    },
    {
        title: "所属公司",
        required: false,
        placeholder: "请输入您所属公司的全称",
        key: "companyName"
    },
    {
        title: "银行账号",
        required: true,
        placeholder: "将用于经纪人奖金结算",
        key: "bankAccount"
    },
    // {
    //     title: "开户行",
    //     required: true,
    //     placeholder: "请输入您银行卡的开户行信息",
    //     key: "bankAccount"
    // },
    {
        title: "手机号",
        required: true,
        placeholder: "请输入您的常用手机号",
        key: "phone"
    },
    // {
    //     title: "邮箱",
    //     required: false,
    //     placeholder: "请输入您的常用邮箱",
    //     key: "email"
    // },
    {
        title: "获知计划渠道",
        required: false,
        placeholder: "您是怎么知道经纪人计划的？",
        key: "channel"
    }
]
it('renders without crashing', () => {
    const div = document.createElement('div');
    inputArr.forEach(res => {

        ReactDOM.render(<Input config = {res} />, div);
        
    })
});
