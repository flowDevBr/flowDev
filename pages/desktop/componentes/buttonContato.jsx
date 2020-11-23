import React, { Component } from 'react';

class buttonContato extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="container-header-botao-contato pointer">
                Contato
            </button>
        );
    }
}

export default buttonContato;