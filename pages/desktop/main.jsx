import React, { Component } from 'react';
import DesenvolvimentoWeb from './componentes/desenvolvimentoWeb';
import Header from './componentes/header'
import PaginaInicial from './componentes/paginaInicial'
import Footer from './componentes/footer'
import DesenvolvimentoApp from './componentes/desenvolvimentoApp';
import DesignInterface from './componentes/designInterface';
import ContatoContainer from './componentes/contatoContainer';
import ReactGA from 'react-ga'

class main extends Component {

    componentDidMount(){
        if (!window.GA_INITIALIZED) {
            this.initGA()
            window.GA_INITIALIZED = true
          }
        this.logPageView()
    }

    initGA = () => {
        console.log('GA init')
        ReactGA.initialize('G-6N2309Q0DD')
      }

    logPageView = () => {
        console.log(`Logging pageview for ${window.location.pathname}`)
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname)
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