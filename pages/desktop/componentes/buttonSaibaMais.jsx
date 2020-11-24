import React, { Component } from 'react';

class buttonSaibaMais extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="botao-saiba-mais">
                Sobre
            </button>
        );
    }
}

export default buttonSaibaMais;