import React from 'react'
import {  useNavigate } from 'react-router-dom';

export default function AllFlights({flightArr}) {
    const nav = useNavigate();
 
    return (
    <div>
               
            {flightArr.map((flight, index) => (
              <div key={index} style=
              {{border:'black solid',
               marginLeft:'800px',
               marginBottom:'60px', 
               width:'400px',
               height:'130px',
               justifyContent:'center',
                font:'menu', 
                fontSize:'20px', 
                backgroundColor:'bisque',
                padding: '10px',
                textAlign: 'center',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column'
                  }}>
                Flight Number:{flight.flighNumbers} <br/>
                Passengers: {flight.passengersNumber} <br/>
                Airline: {flight.flightCompeny} <br/>
              </div>
            ))}
    
             <button onClick={() => nav("/ControlPage")}>Control Page</button>
    
        </div>
      )
    }
    