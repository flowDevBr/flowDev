import React, { Component } from 'react';
import MainSvg from '../images/main';

class nav extends Component {
    render() {
        return (
            <div className="container-paginainicial">
                <div className="col" style={{ alignItems: 'center' }}>
                    <div className="row" style={{ width: 800, justifyContent: 'space-between', marginBottom: 30, alignItems: 'center' }}>
                        <span className="container-paginainicial-titulo">Desenvolvimento <br /> de Softwares e <br /> UI UX Design</span>
                        <div className="row">
                            <span style={{ marginLeft: 60, marginTop: 30 }} className="container-paginas-texto">Construimos suas ideias de ponta a ponta utilizando as melhores tecnologias do mercado e com um design moderno e elegante.<br /><br />
                                <button onClick={this.props.scroll} className="container-paginainicial-botao pointer">Saber Mais</button></span></div>
                    </div>
                    <div style={{ paddingLeft: 70, }}>
                        <MainSvg />
                    </div>
                </div>
            </div>
        );
    }
}

export default nav;