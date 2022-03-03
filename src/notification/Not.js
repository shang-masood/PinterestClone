import React , { useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import './not.css'
export default function Not (props){
  const [open,setopen]=useState(false);
  return (
   <NavItem>
    <li className='nav-item'> 
    <a href='#' className='icon-button' onClick={()=>setopen(true)}>
    something
    </a>
       </li>
   </NavItem>
  )
}

const NavItem=styled.div
`
display :fixed;
right:0;
bottom:0;
margin-bottom:5px;
margin-right:5px;
flex:0;
z-index:10;

`
const Button=styled.button
`
background-color:white;


`