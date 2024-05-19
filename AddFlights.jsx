import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function AddFlights({flightArr}) {
    const [flightNumber,setFlightNunber]=useState(0)
    const [flightCompenyName,setFlightCompenyName]=useState('')
    const [flightPassengersNumber,setFlightPassengersNumber]=useState(0)
    const nav = useNavigate();

   

    const handlePassengersNumber = (event) => {
        setFlightPassengersNumber(event.target.value);
    }

    const handleFlightNumber=(event)=>{
        setFlightNunber ((event.target.value))
    }

    const handleFlightCompenyName=(event)=>{
        setFlightCompenyName(event.target.value)
    }


    function findFlight(){
        for(let i=0;i<flightArr.length;i++)
        {
            if (flightNumber==flightArr[i].flighNumbers)
            {
                alert("Error: Flight number already exists.")
                return false
            }
        }
        return true;
    }
    

    const chekcFlightNumber=()=>{
        if(flightNumber.length>5)
        {
            alert("Erro Flight Number")
            return false;
        }
        return true

    }

    const checkFlightCompenyName=()=>{
        if(flightCompenyName.length<1)
        {
            alert("Compeny Name Erro")
            return false
        }
        return true
    }
    const checkPassengersNumber=()=>{
        if((flightPassengersNumber< 1) || (flightPassengersNumber>450))
        {
            alert("Erro Passengers Number")
            return false;
        }
        return true;
    }

     


    const handleAddFlight=()=>{
        if(checkFlightCompenyName() && checkPassengersNumber() && chekcFlightNumber() && findFlight())
        {
            flightArr.push({ flighNumbers: flightNumber,flightCompeny: flightCompenyName,passengersNumber: flightPassengersNumber });
            setFlightNunber(0);
            setFlightCompenyName('');
            setFlightPassengersNumber(0);
            alert("Flight Add Succsfully")     
        }
        console.log(flightArr);
    }
   


  return (
    <div>
        <h2>Add New Flight</h2>
        <input type='text' placeholder='Please Enter The Flight Number' value={flightNumber} onChange={handleFlightNumber} /><br/>
        <input type='text' placeholder='Please Enter The Flight Compeny Name' value={flightCompenyName} onChange={handleFlightCompenyName}/><br/>
        <input type='text' placeholder='Please Enter The Number Of Passengers'value={flightPassengersNumber} onChange={handlePassengersNumber}/><br/>
        <button onClick={handleAddFlight}>+</button>
        <button onClick={() => nav("/ControlPage/all")}>All Flights</button>
        <button onClick={() => nav("/ControlPage")}>Control Page</button>
    </div>
  )
}
