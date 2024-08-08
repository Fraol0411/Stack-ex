import React from 'react'
import Todoeach from '../Todoeach/Todoeach'

export default function Todolist({tasks,toggler}) {
  return (
    <div>
        <p>your tasks for today</p>
        {
            tasks.map((eachtodo)=>(
              
            <Todoeach key={eachtodo.id} eachtask ={eachtodo} toggler={toggler}/>             
            
            ))
        }
    
    </div>
  )
}
