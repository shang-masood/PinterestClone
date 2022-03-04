import React from 'react'
import { useParams } from 'react-router'
import Unsplash from '../api/Unsplash'
import styled from 'styled-components'
import { AddEvent } from '../store/slice'
import { useSelector, useDispatch } from 'react-redux';
const Showpin = (props) => {
    let {Name}=useParams();
    const boards = useSelector(state => state.board.saved);
    const dispatch=useDispatch();
     const onRemove = (name)=>{
      dispatch(AddEvent.removeBoard(name))
    }
  return (
   
    <div className='show-board'>
        <div className='nameBrd'>
        <h1>{Name}</h1>
        <button className='edit' onClick={onRemove(Name)}>delete </button> 
        </div>
        <div className='showpins'>
          
          <Wrapper>
            <Container>
        {
               boards.map((brd) => 
               { if(Name===brd.title){
                 return <Unsplash  urls={brd.txt}/>}
               }
               )
              }
              </Container>
              </Wrapper>
        </div>
    </div>
  )
}

export default Showpin
const Wrapper=styled.div
`
background-color:white;
display:flex;
width:100%;
height:100%;
margin-top:15px;
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
