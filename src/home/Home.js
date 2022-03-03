import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Unsplash from '../api/Unsplash'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

 import SearchShow from '../search/searchShow'
const Home=(props) => {
  const [images, setImage] = useState([]);
    
  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "c1SuvtELR4tbOJudJnZW4Mc3QAnsMIVrTSo7yVFtLLY"

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }
  
 


    return (
        
      <InfiniteScroll
          dataLength={images.length}
           next={fetchImages}
            hasMore={true}

>
          <Wrapper>
                    <Container>

             {
               images.map(( image) => 
               {
                 let {urls}=image;
                 return <Unsplash  urls={urls}/>
               }
               )
              }
           
          


           </Container>
          </Wrapper>
          </InfiniteScroll>
        
    )






}

export default Home
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

