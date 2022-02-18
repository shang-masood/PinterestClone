import React from 'react'
import styled from 'styled-components';
const Unsplash = ({ url, key }) => {
  
  return (
    <Pins>
      <Img key={key} src={url} alt="" />
    </Pins>
  )
}

export default Unsplash
const Pins=styled.section
`
width:240px;
  margin-bottom: 40px;
  cursor: zoom-in;

`
const Img=styled.img
`
width: 100%;
min-height: 110% !important;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.37);



` 