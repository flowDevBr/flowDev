import React, { Component } from 'react';
import RetangulosImage from '../images/retangulosImage'

class designInterface extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 30, marginBottom: 30 }} className="col">
                    <div className="row">
                        <RetangulosImage />
                        <div style={{ marginLeft: 60, marginTop: 30 }} className="col">
                            <span className="container-paginas-titulo">Design de Interfaces</span>
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

export default designInterface;