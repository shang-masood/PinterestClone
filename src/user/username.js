import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './user.css'
import Fmodal from './fmodal';
import Shmodal from './shmodal'
const Usename=(props)=> {
    const [follower,setfollowers]=useState(false);
    const [folData,setfolData]=useState('');
    const [showshare,setshare]=useState('false');
    return (
        <Wrapper>
            {follower && (
         <Fmodal
         shown={follower}
         data={folData}
         close={() => {
            setfollowers(false);
         }}
       />
        )}
           {showshare && (
         <Shmodal
         shown={showshare}
         close={() => {
            setshare(false);
         }}
       />
        )}
         <Container>
       <Imgg src='data:image/jpeg;base64,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'
        alt='png'/>
         <h1>shangg masood</h1>
         <Userr>@shanggmasood</Userr>
         <Follow>
         <h4 onClick={(e) => {setfollowers(true); setfolData('followers'); e.preventDefault()}}>1 follower</h4>
         <span>  .  </span>
         <h4 onClick={(e) => {setfollowers(true); setfolData('following'); e.preventDefault()}}>1 following</h4>
         </Follow>
         <Btn onClick={(e) => {setshare(true);}}>
             Share
         </Btn>
         <Link to='Settings'>
        < button className='btn1'>
             edit profile
         </button>
         </Link>
         <Pages>
             <Link to='Created'>Created</Link>
             <Link to='Saved'>saved</Link>
         </Pages>
         </Container>
        </Wrapper>
    )
}

export default Usename;
const Wrapper=styled.div
`
background-color:white;
display:flex;
width:100%;
height:100%;
margin-top:90px;


`
const Container =styled.div
`
width:100%;
height:350px;
background-color:white;
margin:0 auto;
max-width:1260px;
text-align: center;
`
const Userr=styled.p
`
color:grey;
font-size:12px;
margin:15px;


`
const Follow = styled.div
`
display: flex;
flex-direction: row;
justify-content:center;
padding:15px;
cursor:pointer
right:100px;
cursor:pointer;

`
const Pages =styled.div
`


color:black;
cursor:pointer
&:hover
{
    opacity:0.6;
}


`
const Btn = styled.button
`
width:80px;
height:50px;
background-color: #efefef;
border-radius: 30px;
margin : 10px;
font-weight: bold;
font-size:16px;


`
const Imgg = styled.img
`
width:120px;
height:120px;
z-index:10;
border-radius: 80px;

`