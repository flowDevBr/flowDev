import React, { Component } from 'react';
import ImageWeb from '../images/webImage'

class devWebMobile extends Component {
    render() {
        return (
            <div >
                <div style={{ marginTop: 30, marginBottom: 30 }} className="row">
                    <div style={{ alignItems: "center" }} className="col">
                        <span className="container-paginas-titulo">Desenvolvimento Web</span>
                        <span style={{ textAlign: "center", marginTop: 10 }} className="container-paginas-texto">
                            Desenvolvemos aplicações web de nível simples a avançado, com qualquer funcionalidade que seu serviço precisa e layouts compatíveis com desktop e mobile.
                        </span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className="row">
                    <ImageWeb style={{ marginTop: 40, marginBottom: 40, marginLeft: 25 }} />
                </div>
            </div>
        );
    }
}

export default devWebMobile;