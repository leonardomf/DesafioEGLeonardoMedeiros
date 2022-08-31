import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

// function App() {
//   return (
// <div class="container">
//   <h1> Publicador de matérias </h1>
// <form>
//   <div class="form-group">
//     <label for="exampleFormControlInput1">Título</label>
//     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite o título da matéria..."/>
//   </div>
//   <br></br>
//   <div class="form-group">
//     <label for="exampleFormControlTextarea1">Conteúdo</label>
//     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//   </div>
//   <br></br>
//   <button className="btn btn-primary" onClick={() => this.props.history.push('/post-add')}>
//   Publicar matéria
//   </button>
// </form>
// </div>  
//   )
// }
// export default App;
import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;