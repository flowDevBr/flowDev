import React, { Component } from 'react';
import DesenvolvimentoWeb from './componentes/desenvolvimentoWeb';
import Header from './componentes/header'
import PaginaInicial from './componentes/paginaInicial'
import Footer from './componentes/footer'
import DesenvolvimentoApp from './componentes/desenvolvimentoApp';
import DesignInterface from './componentes/designInterface';
import ContatoContainer from './componentes/contatoContainer';
import * as Scroll from 'react-scroll';

class main extends Component {


    scrollToContatct = () => {
        Scroll.scroller.scrollTo('contato', {
            smooth: true
        })
    }

    scrollToMore = () => {
        Scroll.scroller.scrollTo('more', {
            smooth: true
        })
    }

    render() {
        return (

            <div className="container">
                <title>Flow Dev</title>
                <link rel="icon" href="/favicon.ico" />
                <Header scroll={this.scrollToContatct} />
                <PaginaInicial style={{ marginTop: 80 }} scroll={this.scrollToMore} />
                <div style={{ marginTop: '20vh', marginBottom: '20vh' }}>
                    <div name='more' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                        <DesenvolvimentoWeb />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                        <DesenvolvimentoApp />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                        <DesignInterface />
                    </div>
                </div>
                <div name='contato'>
                    <ContatoContainer />
                </div>
                <Footer scroll={this.scrollToMore} />
            </div>
        );
    }
}


export default main;