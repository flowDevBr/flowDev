import React, { Component } from 'react';
import ImageWeb from '../images/webImage'

class desenvolvimentoWeb extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 30, marginBottom: 30 }} className="col">
                    <div className="row" style={{width: 850, justifyContent: 'space-between'}}>
                        <div style={{width: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 35}}>
                        <ImageWeb />
                        </div>
                        <div style={{ marginLeft: 60, marginTop: 30 }} className="col">
                            <span className="container-paginas-titulo">Desenvolvimento Web</span>
                            <span className="container-paginas-texto">
                                Our landing pagetemplate works on all<br />
                            devices, so you only have to set it up once,<br />
                            and get beatiful results forever. Our landing<br />
                            pagetemplate works on all devices, so you<br />
                            only have to set it up once, and get beatiful<br />
                            results forever.
                        </span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default desenvolvimentoWeb;