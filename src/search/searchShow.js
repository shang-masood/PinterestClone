import React,{useState} from 'react'
import Unsplash from '../api/Unsplash'
import styled from 'styled-components'


const SearchShow = (props) => {
let {pins}=props;
console.log("this is search")

  return (
    <Wrapper>
        <Container>
    {
      pins.map(( pin) => 
      {
        let {urls}=pin;
        return <Unsplash  urls={urls}/>
      }
      )
      
     }
  {
      pins.map(( pin) => 
      {
        let {urls}=pin;
        return <Unsplash  urls={urls}/>
      }
      )
      
     }
  
 

  </Container>
 
 </Wrapper>
 

)






}

export default SearchShow
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



