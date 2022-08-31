import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   titulo: "",
   conteudo: "",
   data: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedMateria = {
     titulo: form.titulo,
     conteudo: form.conteudo,
     data: form.data,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedMateria),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
    <div className="container">
     <h3>Atualizar matéria</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="titulo">Título </label>
         <input
           type="text"
           className="form-control"
           id="titulo"
           value={form.titulo}
           onChange={(e) => updateForm({ titulo: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="conteudo">Conteúdo </label>
         <textarea
           rows="7"
           type="textarea"
           className="form-control textareaedit"
           id="conteudo"
           value={form.conteudo}
           onChange={(e) => updateForm({ conteudo: e.target.value })}
         />
       </div>
       <br />
       <button className="btn btn-secundary btn-sm" onClick={() => navigate(-1) }>Voltar</button>
       <div className="form-group">
         <input
           type="submit"
           value="Atualizar"
           className="btn btn-primary btn-sm"
         />
       </div>
     </form>
   </div>
 );
}
