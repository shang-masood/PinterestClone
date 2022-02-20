import axios from 'axios'
export default axios.create(
    {
        baseURL:"https://api.unsplash.com",
        headers:
        {

            Authorization: "Client-ID c1SuvtELR4tbOJudJnZW4Mc3QAnsMIVrTSo7yVFtLLY",
        }
  
  
    }
)