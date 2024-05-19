
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


export default function HomePage() {
    const [password, setPassword] = useState('');
    const nav = useNavigate();
    


    const checkValidPassword=()=>{
        const correctPassword='12345'

        if(password===correctPassword){
            alert('Welcome')
            nav("/ControlPage")
        }
        else{
            alert('Wrong Password')
        }
    }
    const checkPassword = () => {
       checkValidPassword();
    };

    const handlePassword=(event)=>{
        setPassword(event.target.value)

    }

    return (
        <div>
           
           
            <input type='text' placeholder='Please Enter Your Password' value={password}  onChange={handlePassword} 
            style={{alignItems:'center', display:'flex', marginTop:'60px',border:'solid black', width:'200px',height:'40px',
                    marginLeft:'40px'}}/>
            <button onClick={checkPassword} 
            style={{alignItems:'center', display:'flex', marginLeft:'40px', border:'solid black', backgroundColor:'blue', 
                   marginBottom:'210px', width:'200px',height:'40px',textAlign:'center',justifyContent:'center'}}>Enter</button>
        </div>
    );
}


