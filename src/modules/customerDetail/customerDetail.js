import React, { Component } from 'react'
import './detail.scss'
import { connect } from 'react-redux';

class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        const { uid } = props.match.params;
        console.log(uid)
    }
    componentDidMount() {
        // console.log
    }


    render() {
        return (
            <div className="customer-detail">
                细节
            </div>
        )
    }
}
export default connect()(CustomerDetail)