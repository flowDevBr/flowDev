import React, { Component } from 'react';
import Logo from '../images/logo'
import ButtonContato from './buttonContato';

class Header extends Component {
    render() {
        return (
            <div className="container-header" >
                <span className="container-header-titulo">
                    <Logo />
                    FlowDev
                    </span>
                <ButtonContato />
            </div>
        );
    }
}

export default Header;