import React from 'react'
import Pins from './pin'
import styled from 'styled-components';
const Home=(props) => {
    const Pin_container=styled.div
`
margin:0 ;
padding:0;
width: '80vw';
position:'absolute';
left:50%;
transform:translateX(-50%);
display:grid;
grid-template-areas:repeat(auto-fill,250px);
grid-auto-rows:10px;



`    
    return (
        <Pin_container>
           <Pins />
        </Pin_container>
    )






}

export default Home
