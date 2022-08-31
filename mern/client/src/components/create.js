import React, { useState } from "react";
import { useNavigate } from "react-router";
import moment from 'moment';

export default function Create() { 
    const [form, setForm] = useState({
        titulo: "",
        conteudo: "",
        data: moment().format("DD/MM/YYYY HH:mm:ss"),
      });    
    const navigate = useNavigate();
    
    // These methods will update the state properties.
    function updateForm(value) {
      return setForm((prev) => {
        return { ...prev, ...value };
      });
    }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const novaMateria = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(novaMateria),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ titulo: "", conteudo: "", data: ""});
   navigate("/");
 }





 // This following section will display the form that takes the input from the user.
 return (
    <div className="container">
     <h3>Criar nova matéria</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="titulo">Título</label>
         <input
           type="text"
           className="form-control"
           id="titulo"
           value={form.titulo}
           onChange={(e) => updateForm({ titulo: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="conteudo">Conteúdo</label>
         <textarea
           rows="7"
           type="textarea"
           className="form-control"
           id="conteudo"
           value={form.conteudo}
           onChange={(e) => updateForm({ conteudo: e.target.value })}
         />
       </div>

       <br></br>
       <button className="btn btn-secundary btn-sm" onClick={() => navigate("/")}>Voltar</button>
       <div className="form-group">
         <input
           type="submit"
           value="Publicar matéria"
           className="btn btn-primary btn-sm"
         />
       </div>
     </form>
   </div>
 );
}