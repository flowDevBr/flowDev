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
                <div className="row">
                    <div style={{ marginLeft: 20, marginBottom: 30 }} className="col">
                        <span className="container-paginas-titulo">Entre em contato</span>
                        <span style={{ marginTop: 20 }} className="container-paginas-texto">Fill up the form and our Team will get back<br /> to you within 24 hours.</span>
                        <span style={{ marginTop: 40 }} className="container-contato-info"><PhoneIcon style={{ color: "#0E5CE6", marginRight: 10 }} />+55 47 98462 3268</span>
                        <span style={{ marginTop: 20 }} className="container-contato-info"><EmailIcon style={{ color: "#0E5CE6", marginRight: 10 }} />email@example.com</span>
                        <span style={{ marginTop: 20 }} className="container-contato-info"><RoomIcon style={{ color: "#0E5CE6", marginRight: 10 }} />Rua Nereu Ramos, Porto Belo - SC</span>
                        <div style={{ marginRight: 50, marginTop: 160, display: "flex", justifyContent: "space-around" }} className="row">
                            <GitHubIcon style={{ color: "#8C8DA9" }} />
                            <InstagramIcon style={{ color: "#8C8DA9" }} />
                            <FacebookIcon style={{ color: "#8C8DA9" }} />
                        </div>
                    </div>
                    <div style={{ marginLeft: 20 }} className="col">
                        <span style={{ marginBottom: 10, marginTop: 60 }} className="container-titulo-input">Nome</span>
                        <input className="container-input" placeholder="Digite seu nome aqui..." type="text" />
                        <span style={{ marginBottom: 10, marginTop: 20 }} className="container-titulo-input">Email</span>
                        <input className="container-input" placeholder="email@example.com" type="text" />
                        <span style={{ marginBottom: 10, marginTop: 20 }} className="container-titulo-input">Mensagem</span>
                        <textarea className="container-textarea" placeholder="Escreva sua mensagem aqui..." name="" id="" cols="30" rows="10"></textarea>
                        <button style={{ marginTop: 20 }} className="container-botao-contato">Enviar mensagem</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default contatoContainer;