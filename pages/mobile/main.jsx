import React, { Component } from 'react';
import Header from '../desktop/componentes/header'
import Footer from '../desktop/componentes/footer'
import IntroducaoPagina from './componentes/introducaoPagina';
import DevWebMobile from './componentes/devWebMobile';
import DevAppMobile from './componentes/devAppMobile';
import DesignInterfaceMobile from './componentes/designInterfaceMobile';
import ContatoMobile from './componentes/contatoMobile'

class main extends Component {
    render() {
        return (
            <div className="container-mobile">
                <Header />
                <IntroducaoPagina />

                <div style={{marginTop: 50, marginBottom: 50}}>
                 <DevWebMobile />
                </div>
                <div style={{marginTop: 50, marginBottom: 50}}>
                <DevAppMobile />
                </div>
                <div style={{marginTop: 50, marginBottom: 50}}>
                <DesignInterfaceMobile />
                </div>
                <div style={{marginBottom: 150, marginTop: 80}}>
                <ContatoMobile />
                </div>

                <Footer />
            </div>
        );
    }
}

export default main;