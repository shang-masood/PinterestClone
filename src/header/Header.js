import React, { useState } from 'react';
import logo from './images/Pinterest-logo.png';
import user from './images/user.png';
import magnifying from './images/magnifying-glass.png';
import chat from './images/chat.png';
import bell from './images/bell-ring.png';
import arrow from './images/arrow.png';
import './header.css';
import { Link } from 'react-router-dom';
import Modal from '../notification/Not';
import Chat from '../chat/chat';
const Header=(props) =>{

    const [input,setinput]=useState("")

    const onSearch =(e)=>{
        e.preventDefault()
    props.onSubmit(input);
     
    }
   const [shownot,setshownot]=useState(false);
   const [showchat,setshowchat]=useState(false);
    return (
       <div>
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
                  
                    <button onClick={(e) => {setshownot(`${shownot == false? true:false}`); }}><img src={bell} /></button>
                    <button onClick={(e) => {setshowchat(true)}}> <img src={chat} /></button>
                    < Link to='/User/Saved'> <img src={user} /></Link>
            
              
                    
                    </div>
                  
        </div>
        {shownot && (
            <Modal
            shown={shownot}
            close={() => {
                setshownot(false);
            }}
          />
           )}    
              {showchat && (
            <Chat
            shown={showchat}
            close={() => {
                setshowchat(false);
            }}
          />
           )}    
        </div>
        
    )
}

export default Header
//hover is problem and I have problem in designing should be the header is resizable