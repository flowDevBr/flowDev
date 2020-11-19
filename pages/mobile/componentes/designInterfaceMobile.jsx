import React, { Component } from 'react';
import RetangulosImage from '../../desktop/images/retangulosImage'

class designInterfaceMobile extends Component {
    render() {
        return (
            <div >
                <div style={{ marginTop: 30, marginBottom: 30 }} className="row">
                    <div style={{ alignItems: "center" }} className="col">
                        <span className="container-paginas-titulo">Design de Interfaces</span>
                        <span style={{ textAlign: "center", marginTop: 10 }} className="container-paginas-texto">
                            Our landing pagetemplate works on all<br />
                            devices, so you only have to set it up once,<br />
                            and get beatiful results forever. Our landing<br />
                            pagetemplate works on all devices, so you<br />
                            only have to set it up once, and get beatiful<br />
                            results forever.
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