import React, { Component } from 'react'
import './detail.scss'
// import { Link } from 'react-router-dom'
// import JRfunction from '../../services/JRfunction'

import {
    Process,
    Cancel,
    Completed
} from './tpls'
import { connect } from 'react-redux';

class CustomerDetail extends Component {
    constructor(props) {
        super();
        // const { search } = props.history.location;
        // JRfunction.getUrlQuery(search);
        // console.log(detail)
        const { userId } = props.match.params;
        const key = `customerId_${userId}`;
        const detail = JSON.parse(sessionStorage.getItem(key))
        const {
            type,
            brokerName,
            customerName,
            dockingCall,
            dockingPerson,
            industry,
            plateNumber,
            productName,
        } = detail

        this.state = {
            type,
            brokerName,
            customerName,
            dockingCall,
            dockingPerson,
            industry,
            plateNumber,
            productName
        }
    }
    componentDidMount() {
        // console.log
    }

    renderTpl(type) {
        const { state } = this;
        let template;
        switch (type) {
            case 'process':
                template = (<Process config={{ state }} />)
                break
            case 'completed':
                template = (<Completed config={{ state }} />)
                break
            case 'cancel':
                template = (<Cancel config={{ state }} />)
                break
            default:
                template = (<Process config={{ state }} />)
                break
        }
        return template;
    }
    render() {
        return (
            <div className="customer-detail">
                {this.renderTpl(this.state.type)}
            </div>
        )
    }
}
export default connect()(CustomerDetail)