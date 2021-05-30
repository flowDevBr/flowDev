import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Discord from '../../desktop/images/discord'


class contatoMobile extends Component {
    render() {
        return (
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }} className="col">
                <div className="col">
                    <div style={{ marginLeft: 20, marginBottom: 30 }} className="col">
                        <span style={{ textAlign: "center" }} className="container-paginas-titulo">Entre em contato</span>
                        <span style={{ marginTop: 20, textAlign: "center" }} className="container-paginas-texto">Entre em contato pelo formulario ou pelas nossa redes socias.</span>
                        <div style={{ marginLeft: 5 }} className="col">
                            <span style={{ marginBottom: 10, marginTop: 40 }} className="container-titulo-input">Nome</span>
                            <input className="container-input" placeholder="Digite seu nome aqui..." type="text" />
                            <span style={{ marginBottom: 10, marginTop: 20 }} className="container-titulo-input">Email</span>
                            <input className="container-input" placeholder="email@example.com" type="text" />
                            <span style={{ marginBottom: 10, marginTop: 20 }} className="container-titulo-input">Mensagem</span>
                            <textarea className="container-textarea" placeholder="Escreva sua mensagem aqui..." name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div style={{ alignItems: 'center' }} className="col">
                            <button style={{ marginTop: 40 }} className="container-botao-contato">Enviar mensagem</button>
                            <span style={{ marginTop: 80, display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: "-40px" }} className="container-contato-info"><EmailIcon style={{ color: "#0E5CE6", marginRight: 10 }} />contato@flow.dev.br</span>
                        </div>
                        <div style={{ marginTop: 1, display: "flex", justifyContent: "space-around", height: 150 }} className="row">
                            <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://discord.gg/yr8dYF5hMK" target="_blank">
                                <Discord className='icon-color' style={{ width: 25 }} />
                            </a>
                            <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://www.instagram.com/flowdev_/" target="_blank">
                                <InstagramIcon className='icon-color' />
                            </a>
                            <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://www.facebook.com/flowdevbr/" target="_blank">
                                <FacebookIcon className='icon-color' />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default contatoMobile;