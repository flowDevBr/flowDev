import React, { Component } from 'react';
import RetangulosImage from '../images/retangulosImage'

class designInterfaceMobile extends Component {
    render() {
        return (
            <div >
                <div style={{ marginTop: 30, marginBottom: 30 }} className="row">
                    <div style={{ alignItems: "center" }} className="col">
                        <span className="container-paginas-titulo">Design de Interfaces</span>
                        <span style={{ textAlign: "center", marginTop: 10 }} className="container-paginas-texto">
                            Estudamos por completo a experiência do úsuario com a aplicação, concluindo as melhores escolhas para FlowDev, usabilidade e design para implementação.
                        </span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className="row">
                    <RetangulosImage style={{ marginTop: 40, marginBottom: 40 }} />
                </div>
            </div>
        );
    }
}

export default designInterfaceMobile;