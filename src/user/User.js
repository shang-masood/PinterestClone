import React from 'react'
import styled from 'styled-components'
import Username from './username'
import { Link } from 'react-router-dom'
const User=()=> {
    return (
        <div>
        <Username />
        <Pages>
        <Page href='Created'>Created</Page>
         <Page href='Saved'>Saved</Page>
         </Pages>
   </div>
    )
}

export default User;

const Page =styled.a
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