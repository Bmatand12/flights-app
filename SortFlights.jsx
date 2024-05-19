import {useState} from 'react'
import Select from 'react-select'
import {  useNavigate } from 'react-router-dom';

export default function SortFlights({flightArr}) {

 
    const [searchTerm, setSearchTerm] = useState('');
    const [showFlights, setShowFlights] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const nav = useNavigate();

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const sortByLowestSeats = () => {
        const sortedFlights = [...flightArr].sort((a, b) => a.passengersNumber - b.passengersNumber);
        return sortedFlights.map((flight, index) => (
            <div key={index} style={{ border: 'black solid', marginBottom: '60px', width: '200px', height: '130px', justifyContent: 'center', font: 'menu', fontSize: '20px', backgroundColor: 'bisque' }}>
                Flight Number: {flight.flighNumbers}, Passengers: {flight.passengersNumber}, Airline: {flight.flightCompeny}
            </div>
        ));
    };

    const sortByHighestSeats = () => {
        const sortedFlights = [...flightArr].sort((a, b) => b.passengersNumber - a.passengersNumber);
        return sortedFlights.map((flight, index) => (
            <div key={index} style={{ border: 'black solid', marginBottom: '60px', width: '200px', height: '130px', justifyContent: 'center', font: 'menu', fontSize: '20px', backgroundColor: 'bisque' }}>
                Flight Number: {flight.flighNumbers}, Passengers: {flight.passengersNumber}, Airline: {flight.flightCompeny}
            </div>
        ));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setShowFlights(event.target.value.trim() !== '');
    };

    const filteredFlights = flightArr.filter((flight) =>
        flight.flightCompeny.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>

<div>
                <input type="text" placeholder="Search by airline..." value={searchTerm} onChange={handleSearch} />
            </div>

            {showFlights && filteredFlights.map((flight, index) => (
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
             <Select
                value={selectedOption}
                onChange={handleChange}
                options={[
                    { value: 'lowest', label: 'Sort by lowest seats' },
                    { value: 'highest', label: 'Sort by highest seats' }
                ]}
            />
            {selectedOption && selectedOption.value === 'lowest' && sortByLowestSeats()}
            {selectedOption && selectedOption.value === 'highest' && sortByHighestSeats()}

            <button onClick={() => nav("/ControlPage")}>Control Page</button>

    </div>
  )
}
