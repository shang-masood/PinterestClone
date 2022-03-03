import React, { useState } from 'react';
import logo from './images/Pinterest-logo.png';
import user from './images/user.png';
import magnifying from './images/magnifying-glass.png';
import chat from './images/chat.png';
import bell from './images/bell-ring.png';
import arrow from './images/arrow.png';
import './header.css';
import { Link } from 'react-router-dom';


const Header=(props) =>{

    const [input,setinput]=useState("")

    const onSearch =(e)=>{
        e.preventDefault()
    props.onSubmit(input);
     
    }
   
    return (
       
        <div className='main-header'>
            <div className='left-header'>
             <img src={logo} />
            
             <Link to="/">Home</Link>
           
            </div>
            <div className='middle-header'>
            <img src={magnifying} />
            <form>
            <input placeholder='search' onChange={(e)=>setinput(e.target.value)}/>
            <button type='submit' onClick={onSearch}></button>
            </form>
    
                </div>
                <div className='right-header'>
                  
                    <Link to='Not'><img src={bell} /></Link>
                    <Link to='Chat'> <img src={chat} /></Link>
                    < Link to='User'> <img src={user} /></Link>
            
                <div className='arrow' > 
                    <Link to='Settings' >  <img src={arrow} /></Link>
                    
                    </div>
                    
                    </div>
                    
        </div>
        
    )
}

export default Header
//hover is problem and I have problem in designing should be the header is resizable