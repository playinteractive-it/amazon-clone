import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5001/clone-bc043/us-central1/api'
  baseURL: 'https://us-central1-clone-bc043.cloudfunctions.net/api'
});

export default instance;