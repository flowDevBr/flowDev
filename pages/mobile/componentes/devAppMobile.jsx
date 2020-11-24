import React, { Component } from 'react';
import CelularImage from '../images/celularImage'

class devAppMobile extends Component {
    render() {
        return (
            <div >
                <div style={{ marginTop: 30, marginBottom: 30 }} className="row">
                    <div style={{ alignItems: "center" }} className="col">
                        <span className="container-paginas-titulo">Desenvolvimento de Apps</span>
                        <span style={{ textAlign: "center", marginTop: 10 }} className="container-paginas-texto">
                            Desenvolvemos aplicações nativas de alta performance tanto para Android quanto para IOS.
                        </span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className="row">
                    <CelularImage style={{ marginTop: 40, marginBottom: 40 }} />
                </div>
            </div>
        );
    }
}

export default devAppMobile;