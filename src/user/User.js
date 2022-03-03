import React from 'react'
import styled from 'styled-components'
import Username from './username'
const User=()=> {
    return (
        <>
        <Username />
      
   </>
    )
}

export default User;
const Wrapper=styled.div
`
background-color:white;
display:flex;
width:100%;
height:100%;
margin-top:150px;


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
align-items: center;
padding:15px;
cursor:pointer
`