export const basicCells = [{
    title: "用户名",
    required: true,
    placeholder: "登录账号由字母和数字组成",
    key: "useCode"
}, {
    title: "密码",
    required: true,
    placeholder: "请输入密码",
    key: "pwd",
    type:"password"
}, {
    title: "确认密码",
    required: true,
    placeholder: "请再次输入密码",
    key: "rptPwd",
    type:"password"    
}];


export const extraCells = [
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
