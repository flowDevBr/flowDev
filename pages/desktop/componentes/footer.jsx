import React, { Component } from 'react';
import Logo from '../images/logo'
import ButtonLogin from './buttonLogin'
import ButtonSaibaMais from './buttonSaibaMais'

class footer extends Component {
    render() {
        return (
            <div className="container-footer">
                <span className="container-header-titulo">
                    <Logo />
                FlowDev
                </span>
                <div>
                    <ButtonSaibaMais />
                    <ButtonLogin />
                </div>
            </div>
        );
    }
}

export default footer;