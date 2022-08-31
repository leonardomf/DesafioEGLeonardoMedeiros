import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const Record = (props) => (
 <tr>
   <td className="tabletitulo">{props.record.titulo}</td>
   <td className="tableconteudo">{props.record.conteudo}</td>
   <td>{props.record.data}</td>
   <td>
     <Link className="btn btn-primary btn-lg active btn-sm" style={{margin: "2px"}} to={`/edit/${props.record._id}`}>Editar</Link>
     <button className="btn btn-danger btn-sm" style={{margin: "2px"}}
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Deletar
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 
  

 // This following section will display the table with the records of individuals.
 return (

    

    <div className="container">

 

     <h3>Lista de matérias publicadas</h3>
     <table className="table table-hover" style={{ marginTop: 20 }}>
       <thead class="thead-dark">
         <tr>
           <th className="tabletitulo">Título</th>
           <th className="tableconteudo">Conteúdo da matéria</th>
           <th>Data de criação</th>
           <th>Ação</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );




}