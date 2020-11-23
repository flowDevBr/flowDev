import React, { Component } from 'react';
import CelularImage from '../images/celularImage'

class desenvolvimentoApp extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 30, marginBottom: 30, }} className="col">
                    <div className="row" style={{width: 850, justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{ marginRight: 60, textAlign: "right" }} className="col">
                            <span className="container-paginas-titulo" style={{marginBottom: 30, fontSize: 25}}>Desenvolvimento de Apps</span>
                            <span className="container-paginas-texto" style={{lineHeight: 2, fontSize: 18, width: 400}}>
                            Desenvolvemos aplicacacoes nativas de alta performace tanto para Android quanto para IOS.
                        </span>
                        </div>
                        <div style={{width: 350, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CelularImage />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default desenvolvimentoApp;