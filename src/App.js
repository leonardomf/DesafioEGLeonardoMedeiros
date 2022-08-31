import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';


//const {MongoClient} = require('mongodb');


function App() {
  return (



  <div className="container">

 <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Desafio Editora</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="noticias">Notícias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Destaques</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Esportes</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Ação 1</a></li>
            <li><a class="dropdown-item" href="#">Ação 2</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Ação 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Pesquisar notícia" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Pesquisar</button>
    </form>
  </div>
</nav>





  <h2>Notícias</h2>
  <p>Gerenciar noticias</p>
  <p>News1</p>
  <p>News2</p>
  <p>News3</p>



  <p>Criar notícias</p>

  <button className="btn btn-success" onClick={() => this.props.history.push('/post-add')}>
  Adicionar
  </button>
  <p>Ler notícias</p>
  <button className="btn btn-primary" onClick={() => this.props.history.push('/post-add')}>
  Visualizar
  </button>
  <p>Atualizar notícias</p>
  <button className="btn btn-primary" onClick={() => this.props.history.push('/post-add')}>
  Atualizar
  </button>
  <p>Deletar notícias</p>
  <button className="btn btn-danger" onClick={() => this.props.history.push('/post-add')}>
  Deletar
  </button>
  </div>
  )

                        // render() {

                        //   return (
                        //       <div className="container">
                  
                        //           <div className="page-top">
                        //               <div className="page-top__title">
                        //                   <h2>Posts</h2>
                        //                   <p>Listagem dos posts</p>
                        //               </div>
                        //               <div className="page-top__aside">
                        //                   <button className="btn btn-primary" onClick={() => this.props.history.push('/post-add')}>
                        //                       Adicionar
                        //                   </button>
                        //               </div>
                        //           </div>
                        //       </div>
                        //          )
                        //          }

}
export default App;
