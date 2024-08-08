import React from 'react'

export default function ({eachtask,toggler}) {
  function handleTogle (){
    toggler(eachtask.id)
 }
  return (

    <div>
        <label htmlFor="">
            <input type="checkbox" onChange={handleTogle} checked={eachtask.complete}/>
            {eachtask.name}
         </label>
    </div>
  )
}
