import React, { Component } from 'react';
import ImageWeb from '../images/webImage'
import * as Scroll from 'react-scroll';


class introducaoPagina extends Component {
    render() {
        return (

            <div style={{ height: '88vh', justifyContent: 'center', alignItems: "center" }} className="col">

                <div style={{ alignItems: "center", justifyContent: "center" }} className="row">
                    <span style={{ textAlign: "center" }} className="container-paginainicial-titulo">
                        FlowDev
                </span>
                </div>
                <div className="row">
                    <span style={{ marginTop: 40, marginBottom: 20 }} className="container-paginas-texto">Construimos suas ideias de ponta a ponta utilizando as melhores tecnologias do mercado e com um design moderno e elegante.<br /><br /> </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }} className="col">
                    <Scroll.Link to='contato'>
                        <button className="container-paginainicial-botao">Saber Mais</button>
                    </Scroll.Link>
                </div>
                <ImageWeb style={{ marginTop: 40, marginBottom: 40, marginLeft: 25 }} />
            </div>
        );
    }
}

export default introducaoPagina;