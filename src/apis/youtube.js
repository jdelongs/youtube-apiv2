import axios from 'axios'; 

const KEY = 'AIzaSyCL7ZV3Sbl4jZTzLLpNR12WVUzDN4_wxL4'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5,
        key: KEY
    } 
}); 