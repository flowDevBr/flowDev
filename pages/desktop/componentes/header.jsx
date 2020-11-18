import React, { Component } from 'react';
import Logo from '../images/logo'
import ButtonContato from './buttonContato';

class Header extends Component {
    render() {
        return (
            <div className="container-header" >
                <div className='container-header-small'>
                <span className="container-header-titulo">
                    <Logo />
                    FlowDev
                    </span>
                <ButtonContato />
                </div>
            </div>
        );
    }
}

export default Header;