import React from 'react'
import styled from 'styled-components'
import Username from './username'
import { useNavigate } from "react-router-dom";
const User=()=> {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/User/Created`; 
    navigate(path);
  }
  const routeChanges = () =>{ 
    let path = `/User/Saved`; 
    navigate(path);
  }
    return (
        <div>
        <Username />
        <Pages>
      <Page onClick={routeChange}> Created</Page>
      <Page onClick={routeChanges}> Saved</Page>
         </Pages>
   </div>
    )
}

export default User;

const Page =styled.button
`
padding:1em;
text-align: center;
display:inline-block;
text-decoration: none !important;
margin:0 auto;
color:black;
font-size: large;
   font-weight: bolder;
&:hover
{
    background-color: #efefef;
    border-radius:15px;
    height:20px;
}

`
const Pages =styled.div
`

background-color:white;
text-align: center;

`