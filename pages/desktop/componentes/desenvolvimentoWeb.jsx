import React, { Component } from 'react';
import ImageWeb from '../images/webImage'

class desenvolvimentoWeb extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 30, marginBottom: 30 }} className="col">
                    <div className="row" style={{ width: 850, justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ width: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 35 }}>
                            <ImageWeb />
                        </div>
                        <div style={{ marginLeft: 60, marginTop: 30, }} className="col">
                            <span className="container-paginas-titulo" style={{ marginBottom: 30, fontSize: 25 }}>Desenvolvimento Web</span>
                            <span className="container-paginas-texto" style={{ lineHeight: 2, fontSize: 18, width: 400 }}>
                                Desenvolvemos aplicações web de nível simples a avançado, com qualquer funcionalidade que seu serviço precisa e layouts compatíveis com desktop e mobile.
                        </span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default desenvolvimentoWeb;