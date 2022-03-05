import React from 'react'
import User from './User'
import { useSelector, useDispatch } from 'react-redux';
import Unsplash from '../api/Unsplash'
import styled from 'styled-components'
const Created = () => {
  const boards = useSelector(state => state.board.saved);
  console.log(boards)
  return (
    <div>  
      <User /> 
      
        {
               boards.map((brd) => 
               { 
                 if(brd.c === "created"){
                   console.log("yess")
                 return <Unsplash  urls={brd.txt}/>}
                }
               )
              }
             
    </div>
  )
}

export default Created

const Wrapper=styled.div
`
background-color:white;
display:flex;
width:100%;
height:100%;
margin-top:700px;
justify-content:center;

`
const Container =styled.div
`

column-count:5;
column-gap:5px;
height:100%;
background-color:white;
margin:0 auto;
max-width:1260px;
`