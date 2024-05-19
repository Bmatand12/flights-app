import React from 'react'
import {  useNavigate } from 'react-router-dom';


export default function ControlPage() {

    const nav = useNavigate();
    


  return (
  
        
    <div style={{flexDirection:'column',alignItems:'flex-start', display:'flex', marginTop:'100px', marginLeft:'2px' , }}>


       
       <button onClick={() => nav("/ControlPage/all")}>All Flights</button>
        
        <button onClick={() => nav("/ControlPage/sort")}>Sort Flights</button>
      
        <button onClick={() => nav("/ControlPage/add")}>Add Flights</button>

        <button onClick={() => nav("/ControlPage/delete")}>Delete Flights</button>

      

    </div>
  )
}
