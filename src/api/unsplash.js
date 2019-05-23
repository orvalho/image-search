import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID b8163cec1cd11294771968cf19cecfd69e499422d85de3e867735c91a92f60b5'
  }
});
