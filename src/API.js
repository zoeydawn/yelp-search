import axios, { get, post, delete } from 'axios'
// import ServerActions from './actions/ServerActions'

const API = {
  search(name, location) {

    get(`/search?search=${name}&location=${location}`)
    .then(res => {
      let { data } = res;
      console.log("data", data);
    })
    .catch(console.error);
  }
}

export default API;
