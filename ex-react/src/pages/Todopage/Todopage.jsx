import React, { useState, useRef } from 'react'
import Todolist from '../../Component/Todolist/Todolist'
import { v4 as uuidv4 } from 'uuid';

export default function Todopage() {
    
     const [task , setTask] = useState([])
     const intask = useRef(null)
     
   
     function handletask(e) {        
        // e.preventDefault()
        const invaleu = intask.current.value;
        if (invaleu === " ") return
        setTask(prevTask => {
            return[...prevTask, {id:uuidv4(), name:invaleu, complete:false}]   
        })
        console.log("current id ," , uuidv4())
        console.log("current task " , task)
        intask.current.value = "";
     }

     function handelclear (e){
           setTask( task =>{
            return []
           })
     }
    //  function toggler (id) {
    //      const newTasks = [...task]
    //      const task1 = newTasks.find(task1 => task1.id = id)
    //      task1.complete = !task1.complete
    //      setTask(newTasks)
    //  }
    function toggler(id) {
      const newTasks = task.map(t =>
        t.id === id ? { ...t, complete: !t.complete } : t
      );
      setTask(newTasks);
    }
     const completedtask = task.filter(tasks => tasks.complete)
  return (
    <div>
        <Todolist tasks={task} toggler={toggler}/>         
        <input ref={intask} type="text" placeholder='enter task' />
        <button onClick={handletask}>enter task</button>
        <button onClick={handelclear} >clear all task</button>          
        <p> {task.filter(tasks=> !tasks.complete).length} to do left for Aug-5-2024 </p>

        <div>
           <p>completed task</p>
           <p>
            {
              completedtask.length > 0 ? (
                completedtask.map(t=>(
                  <p>{t.name}</p>
                ))
              ) : "no completed task"
            }
            </p> 
        </div>
    </div>
  )
}
