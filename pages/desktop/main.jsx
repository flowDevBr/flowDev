import React, { Component } from 'react';
import DesenvolvimentoWeb from './componentes/desenvolvimentoWeb';
import Header from './componentes/header'
import PaginaInicial from './componentes/paginaInicial'
import Footer from './componentes/footer'
import DesenvolvimentoApp from './componentes/desenvolvimentoApp';
import DesignInterface from './componentes/designInterface';
import ContatoContainer from './componentes/contatoContainer';
import { initGA, logPageView } from '../utils/ga'

class main extends Component {

    componentDidMount(){
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
          }
        logPageView()
    }

    render() {
        return (

            <div className="container">
                <title>Flow Dev</title>
                <link rel="icon" href="/favicon.ico" />
                <Header />
                <PaginaInicial />
                <div style={{marginBottom: 50, marginTop: 100}}>
                <DesenvolvimentoWeb />
                </div>
                <div style={{marginBottom: 50, marginTop: 50}}>
                <DesenvolvimentoApp />
                </div>
                <div style={{marginBottom: 100, marginTop: 50}}>
                <DesignInterface />
                </div>
                <ContatoContainer />
                <Footer />
            </div>
        );
    }
}


export default main;