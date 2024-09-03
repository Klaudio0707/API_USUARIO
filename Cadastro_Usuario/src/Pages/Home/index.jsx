import { useState } from 'react'
import Trash from "../../assets/lixeira_3.svg"
import './styles.css'
import api from "../../services/api"



function Home() {
  const users = []

  async function getUsers(){



  }


  return (
    <div className='Container'>
     <form method='post'>
       <h1>Cadastro de Usúarios</h1>
       <input name="nome" type="text" placeholder='Nome' />
       <input name="email" type="email" placeholder='E-mail' />
       <input name="idade" type="number" placeholder='Idade' />
       <button type='button' >Enviar</button>
     </form>
     
     {users.map(user => (
       <div key={user.id} className='card'>
         <div>
         <p>Nome: <span>{user.name}</span></p>
         <p>Email: <span>{user.email}</span></p>
         <p>Idade: <span>{user.age}</span></p>
         </div>
         <button>
         <img src={Trash} alt="imagem de lixeira" />
         </button>
       </div>
     ))};
    
    </div>

  )
}

export default Home
