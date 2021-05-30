import React, { Component } from 'react';
import Header from '../desktop/componentes/header'
import Footer from '../desktop/componentes/footer'
import IntroducaoPagina from './componentes/introducaoPagina';
import DevWebMobile from './componentes/devWebMobile';
import DevAppMobile from './componentes/devAppMobile';
import DesignInterfaceMobile from './componentes/designInterfaceMobile';
import ContatoMobile from './componentes/contatoMobile'
import * as Scroll from 'react-scroll';

class main extends Component {

    scrollToContatct = () => {
        Scroll.scroller.scrollTo('contato', {
            smooth: true,
            offset: -50
        })
    }

    scrollToMore = () => {
        Scroll.scroller.scrollTo('more', {
            smooth: true
        })
    }

    render() {
        return (
            <div className="container-mobile">

                <Header scroll={this.scrollToContatct} />
                <IntroducaoPagina scroll={this.scrollToMore} />
                <div name='more' style={{ marginTop: 50, marginBottom: 50 }}>

                    <DevWebMobile />
                </div>
                <div style={{ marginTop: 50, marginBottom: 50 }}>
                    <DevAppMobile />
                </div>
                <div style={{ marginTop: 50, marginBottom: 50 }}>
                    <DesignInterfaceMobile />
                </div>
                <div style={{ marginBottom: 80, marginTop: 80 }}>
                    <div name='contato'>
                        <ContatoMobile name='contato' />
                    </div>
                </div>

                <Footer scroll={this.scrollToMore} />
            </div>
        );
    }
}

export default main;