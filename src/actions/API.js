import axios from 'axios';

export default axios.create({
  baseURL: 'https://courseshop-gatech.herokuapp.com/',
  responseType: 'json'
});
