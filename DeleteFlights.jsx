import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function DeleteFlights({ flightArr: initialFlightArr, deleteFlights }) {
    const [searchFlightInput, setSearchFlightInput] = useState('');
    const [filteredFlights, setFilteredFlights] = useState([]);
    const nav = useNavigate();

    const handleSearchFlights = (event) => {
        setSearchFlightInput(event.target.value);
        const filtered = initialFlightArr.filter((flight) =>
            flight.flighNumbers.toString().includes(event.target.value)
        );
        setFilteredFlights(filtered);
    };

    const handleDeleteFlight = (index) => {
        deleteFlights(index);
        const updatedFilteredFlights = filteredFlights.filter((_ , i) => i !== index);
        setFilteredFlights(updatedFilteredFlights);
    };

    return (
        <div>
            <div>
                <input
                    type='text'
                    placeholder='Search By Flight Number'
                    value={searchFlightInput}
                    onChange={handleSearchFlights}
                />
            </div>
            
            {searchFlightInput.trim() !== '' && (
                <div>
                    {filteredFlights.map((flight, index) => (
                        <div key={index} style={{
                            border:'black solid',
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
                            <div>Flight Number: {flight.flighNumbers}</div>
                            <div>Passengers: {flight.passengersNumber}</div>
                            <div>Airline: {flight.flightCompeny}</div>
                            <button onClick={() => handleDeleteFlight(index)}>X</button>
                        </div>
                    ))}
                </div>
            )}
             <button onClick={() => nav("/ControlPage/all")}>All Flights</button>
        </div>
    );
}
