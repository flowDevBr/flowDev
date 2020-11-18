import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';

class contatoContainer extends Component {
    render() {
        return (
            <div className="col">
                <div className="row" style={{width: 800, justifyContent: 'space-between', alignItems: 'center', height: '80vh'}}>
                    <div style={{  }} className="col">
                        <span className="container-paginas-titulo">Entre em contato</span>
                        <span style={{ marginTop: 20 }} className="container-paginas-texto">Fill up the form and our Team will get back<br /> to you within 24 hours.</span>
                        <span style={{ marginTop: 60, display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="container-contato-info pointer"><PhoneIcon style={{ color: "#0E5CE6", marginRight: 10, fontSize: 18 }} />+55 47 98462 3268</span>
                        <span style={{ marginTop: 40, display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="container-contato-info pointer"><EmailIcon style={{ color: "#0E5CE6", marginRight: 10, fontSize: 18 }} />email@example.com</span>
                        <span style={{ marginTop: 40, display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="container-contato-info pointer"><RoomIcon style={{ color: "#0E5CE6", marginRight: 10, fontSize: 18 }} />Rua Nereu Ramos, Porto Belo - SC</span>
                        <div style={{ marginRight: 40, marginTop: 100, display: "flex", width: 250, justifyContent: "space-around" }} className="row">
                            <div className='icon-container'>
                            <GitHubIcon className='icon-color' />
                            </div>
                            <div className='icon-container'>
                            <InstagramIcon className='icon-color' />
                            </div>
                            <div className='icon-container'>
                            <FacebookIcon className='icon-color' />
                            </div>
                        </div>
                    </div>
                    <div style={{}} className="col">
                        <span style={{ marginBottom: 10, marginTop: 20 }} className="container-titulo-input">Nome</span>
                        <input className="container-input" placeholder="Digite seu nome aqui..." type="text" />
                        <span style={{ marginBottom: 10, marginTop: 20 }} className="container-titulo-input">Email</span>
                        <input className="container-input" placeholder="email@example.com" type="text" />
                        <span style={{ marginBottom: 10, marginTop: 20 }} className="container-titulo-input">Mensagem</span>
                        <textarea className="container-textarea" placeholder="Escreva sua mensagem aqui..." name="" id="" cols="30" rows="10"></textarea>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <button style={{ marginTop: 40 }} className="container-botao-contato pointer">Enviar mensagem</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default contatoContainer;