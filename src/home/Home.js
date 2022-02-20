import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Unsplash from '../api/Unsplash'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
 
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

                 {images.map(image => (
            <Unsplash url={image.urls.thumb} key={image.id} />
          ))}
          

          </Wrapper>
          </InfiniteScroll>
    )






}

export default Home
const Wrapper=styled.div
`
display: grid;
grid-template-columns: repeat(auto-fill, 330px);
gap: 20px;
justify-content: center;
margin: 70px auto;
height: auto !important;


`
