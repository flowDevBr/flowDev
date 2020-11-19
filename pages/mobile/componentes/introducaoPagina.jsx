import React, { Component } from 'react';
import ImageWeb from '../../desktop/images/webImage'


class introducaoPagina extends Component {
    render() {
        return (

            <div style={{height: '88vh', justifyContent: 'center'}} className="col">

                <div style={{ alignItems: "center", justifyContent: "center" }} className="row">
                    <span style={{ textAlign: "center" }} className="container-paginainicial-titulo">
                        FlowDev
                </span>
                </div>
                <div className="row">
                    <span style={{ marginTop: 40, marginBottom: 20 }} className="container-paginas-texto">Our landing pagetemplate works on all<br /> devices, so you only have to set it up<br /> once, and get beatiful results forever. <br /><br /> </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }} className="col">
                    <button className="container-paginainicial-botao">Saber Mais</button>
                </div>
                <ImageWeb style={{ marginTop: 40, marginBottom: 40 }} />
            </div>
        );
    }
}

export default introducaoPagina;