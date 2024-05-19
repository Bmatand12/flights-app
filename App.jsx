import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ControlPage from './components/ControlPage'
import SortFlights from './components/SortFlights'
import AddFlights from './components/AddFlights'
import DeleteFlights from './components/DeleteFlights'
import { useState } from 'react'
import AllFlights from './components/AllFlights'

function App() {
 
    const [flightArr,setFlightArr] =useState( [
      {flighNumbers:123, flightCompeny:'El Al',passengersNumber:321},
      {flighNumbers:423, flightCompeny:'Israer',passengersNumber:123},
      {flighNumbers:765, flightCompeny:'Arkia',passengersNumber:211},
      {flighNumbers:876, flightCompeny:'Air Canada',passengersNumber:300}

    ])

    const deleteFlights = (index) =>{
      const updatedFlights = flightArr.filter((_ , i)=> i !== index)
      setFlightArr(updatedFlights)
    }

    
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ControlPage' element={<ControlPage/>}/>
          <Route path='/ControlPage/sort' element={<SortFlights flightArr={flightArr}/>}/>
          <Route path='/ControlPage/add' element={<AddFlights flightArr={flightArr}/>}/>
          <Route path='/ControlPage/delete' element={<DeleteFlights flightArr={flightArr} deleteFlights={deleteFlights}/>}/>

          <Route path='/ControlPage/all' element={<AllFlights flightArr={flightArr}/>}/>

        </Routes>
       
      </div>
    
    </>
  )
}

export default App
