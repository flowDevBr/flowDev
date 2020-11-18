import React, { Component } from 'react';
import MainSvg from '../images/main';

class nav extends Component {
    render() {
        return (
            <div className="container-paginainicial">
                <div className="col" style={{alignItems: 'center'}}>
                    <div className="row" style={{width: 800, justifyContent: 'space-between', marginBottom: 30}}>
                        <span className="container-paginainicial-titulo">Landing<br />
                            Template for <br />Startups</span>
                        <div className="row">
                            <span style={{ marginLeft: 60, marginTop: 30 }} className="container-paginas-texto">Our landing pagetemplate works on all<br /> devices, so you only have to set it up<br /> once, and get beatiful results forever. <br /><br />
                                <button className="container-paginainicial-botao">Saber Mais</button></span></div>
                    </div>
                    <div style={{paddingLeft: 70,}}>
                    <MainSvg />
                    </div>
                </div>
            </div>
        );
    }
}

export default nav;