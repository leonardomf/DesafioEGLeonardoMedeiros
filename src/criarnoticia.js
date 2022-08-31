import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
    return (
        <div className="container">

<p>Criar notícias</p>
<button className="btn btn-success" onClick={() => this.props.history.push('/post-add')}>
Adicionar
</button>
</div>
    )
}