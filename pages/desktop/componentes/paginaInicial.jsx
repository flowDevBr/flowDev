import React, { Component } from 'react';

class nav extends Component {
    render() {
        return (
            <div className="container-paginainicial">
                <div className="col">
                    <div className="row">
                        <span className="container-paginainicial-titulo">Landing<br />
                Template for <br />Startups</span>
                        <div className="row">
                            <span style={{ marginLeft: 60, marginTop: 30 }} className="container-paginas-texto">Our landing pagetemplate works on all<br /> devices, so you only have to set it up<br /> once, and get beatiful results forever. <br /><br />
                                <button className="container-paginainicial-botao">Saber Mais</button></span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default nav;