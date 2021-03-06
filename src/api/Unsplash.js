import React ,{useState} from 'react'
import styled from 'styled-components';
import Oimg from './Oimg';
const Unsplash = (props) => {
  let {urls}=props;
  const [openadd,setOadd]=useState(false);
  return (
   
    <Pins>
      {openadd &&(
      <Oimg shown={openadd} 
      close={() => {
        setOadd(false);}}
        data={urls}
        
        />
      )}
      <Img src={urls} alt="" onClick={(e) => {setOadd(true);}}  />
    
  
    </Pins>
  )
}

export default Unsplash
const Pins=styled.section
`
display:inline-flex;
padding:8px;
`
const Container=styled.div
`
display:flex;
align-items:center;
box-sizing:border-box;
cursor:pointer;
width:236px;

`
const Img=styled.img
`
display:flex;
width: 100%;
min-height: 110% !important;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.37);
cursor:zoom-in;
&:hover {
 
  display: block;
  background: black;
  opacity: 0.7;
  top: 0;
}

` 