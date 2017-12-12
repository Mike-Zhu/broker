import React, { Component } from 'react'
import footerLink from '../static/images/icon_footer_link.png'
import {
    Link
} from 'react-router-dom'

const styles = {
    outer:{
        "textAlign": "center",
        "padding": "10px"
    },
    height20:{
        "height":"20px"
    }
}

export default class Footer extends Component {
    constructor(props) {
        super();
        let style;
        if(props && props.config && props.config.style){
            style = props.config.style
        }
        this.state = {
            style
        }
    }

    render() {
        return (
            <div style={this.state.style ||styles.outer}>
                <Link to="/menu">
                    <img style={ styles.height20} alt="footer" src={footerLink} />
                </Link>
            </div> 
        )
    }
}