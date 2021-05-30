import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/loading.json'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Discord from '../images/discord'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
};


class contatoContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            status: null
        }
    }

    handleAnimation = () => {
        this.setState({
            loading: true
        })


        setTimeout(() => {
            this.setState({
                status: 500,
                loading: false
            })

            setTimeout(() => {
                this.setState({
                    status: null
                })
            }, 1000);
        }, 1000);


    }

    btnClass = () => {
        switch (this.state.status) {
            case null:
                return "container-botao-contato pointer"
            case 200:
                return "container-botao-contato green-bg pointer"
            case 500:
                return "container-botao-contato red-bg pointer"
        }
    }

    render() {
        return (
            <div className="col">
                <div className="row" style={{ width: 800, justifyContent: 'space-between', alignItems: 'center', height: '90vh' }}>
                    <div style={{}} className="col">
                        <span className="container-paginas-titulo">Entre em contato</span>
                        <span style={{ marginTop: 20 }} className="container-paginas-texto">Entre em contato pelo formulario ou pelas nossa redes socias.</span>
                        <span style={{ marginTop: 40, display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="container-contato-info pointer"><EmailIcon style={{ color: "#0E5CE6", marginRight: 10, fontSize: 18 }} />contato@flow.dev.br</span>
                        <div style={{ marginRight: 40, marginTop: 100, display: "flex", width: 250, justifyContent: "space-around" }} className="row">
                            <div className='icon-container'>
                                <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://discord.gg/yr8dYF5hMK" target="_blank">
                                    <Discord className='icon-color' style={{ width: 25 }} />
                                </a>
                            </div>
                            <div className='icon-container'>
                                <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://www.instagram.com/flowdev_/" target="_blank">
                                    <InstagramIcon className='icon-color' />
                                </a>
                            </div>
                            <div className='icon-container'>
                                <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://www.facebook.com/flowdevbr/" target="_blank">
                                    <FacebookIcon className='icon-color' />
                                </a>
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
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <button onClick={this.handleAnimation} style={{ marginTop: 40 }} className={this.btnClass()}>{this.state.loading ? <Lottie options={defaultOptions} height={120} width={120} /> : this.state.status != null ? this.state.status === 200 ? 'Mensagen enviada' : 'Erro' : 'Enviar mensagem'}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default contatoContainer;