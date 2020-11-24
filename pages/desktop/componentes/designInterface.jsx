import React, { Component } from 'react';
import RetangulosImage from '../images/retangulosImage'

class designInterface extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 30, marginBottom: 30 }} className="col">
                    <div className="row" style={{ width: 850, justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ width: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <RetangulosImage />
                        </div>
                        <div style={{ marginLeft: 60, marginTop: 30 }} className="col">
                            <span className="container-paginas-titulo" style={{ marginBottom: 30, fontSize: 25 }}>Design de Interfaces</span>
                            <span className="container-paginas-texto" style={{ lineHeight: 2, fontSize: 18, width: 400 }}>
                                Estudamos por completo a experiência do úsuario com a aplicação, concluindo as melhores escolhas para FlowDev, usabilidade e design para implementação.
                        </span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default designInterface;