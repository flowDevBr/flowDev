import React, { Component } from 'react';
import Logo from '../images/logo'
import ButtonLogin from './buttonLogin'
import ButtonSaibaMais from './buttonSaibaMais'

class footer extends Component {
    render() {
        return (
            <div className="container-footer">
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%'}}>
                <span className="container-header-titulo">
                    <Logo />
                FlowDev
                </span>
                <div className='row'>
                    <ButtonSaibaMais />
                    <ButtonLogin />
                </div>
                </div>
            </div>
        );
    }
}

export default footer;