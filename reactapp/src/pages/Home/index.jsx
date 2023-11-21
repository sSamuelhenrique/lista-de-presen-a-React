import React, { useState, useEffect } from 'react'
import '../Home/style.css'

import {Card} from '../../components/Card'
export function Home() {
  const [nameStudent, setNameStudent] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});


  function handleStudent(){

      /* let modal = document.querySelector('.modal');
      let verificaClasse = modal.classList.contains('hidden')

      if(verificaClasse){ 
        modal.classList.remove('hidden');
      } */

    let newStudent = {
      name: nameStudent,
      time : new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
     setStudents(prevState => [...prevState, newStudent])
  }
 let student;
/* comentario */
 useEffect(() =>{
      async function fetchData(){
        const response = await fetch('https://api.github.com/users/sSamuelhenrique');
        const data = await response.json();

        setUser({
          name : data.name,
          avatar : data.avatar_url,
        })
      }
  fetchData();
 },[])

 
  return (
    <div className="container">

     {/* DIÁRIO */}
     <div className="modal hidden">
      <h3>adicionado com sucesso</h3>
     </div>
     <header>
      <h1>Lista de Presença </h1>
      <div className="infosUser">
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="" />
      </div>
     </header>
      

      <input 
      type="text"  
      onChange={e => setNameStudent(e.target.value)} 
      placeholder='Digite seu nome...' 
      />

      <button type='button' onClick={handleStudent} >Adicionar</button>
      
      {
        student = students.map(student => <Card key={student.time} name={student.name} time={student.time}/>  )
      }
   
    </div>
  )
}
