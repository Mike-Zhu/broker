import React, { Component } from 'react'
import './menu.scss'
import { connect } from 'react-redux'
import { Table, Divider, Tag } from 'antd';




const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];


class Menu extends Component {

    checkQuestion = uid => {
        let {history} = this.props
        history.push(`wrongDetail/${uid}`)
    }

    columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
            </span>
        ),
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a onClick={() => this.checkQuestion(record.address)}>修改 </a>
                <Divider type="vertical" />
                <a href="javascript:;">标记完成</a>
            </span>
        ),
    }];

    render() {
        return (
            <div className="wrong-list">
                <h3>错题列表</h3>
                <Table columns={this.columns} dataSource={data} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.globalData || {}
}
export default connect(mapStateToProps)(Menu);