import axios from 'axios';
const API_URL = 'http://localhost:4000/tags/';

export async function getTags(){
  return axios.get(API_URL)
  .then(response => {
      console.log('Data received from database.');
      return response.data;
  })
  .catch(() => {
      console.log('Error retreiving data.')
  })
}

export function getTag(id){
  return axios.get(API_URL + id)
  .then( res => console.log(res))
  .catch(err => console.log(err));
}

export async function createTag(tag){
  return axios.post(API_URL, tag)
  .then(response => response.data)
  .catch(err => console.log(err.message));
}

export function removeTag(id) {
    axios.delete(API_URL + id)
    .then( response => console.log(response.data))
    .catch(err => console.log(err.message));
}

export async function updateTag(tag){
    axios.put(API_URL + tag._id, tag)
    .then(console.log(tag))
    .then( res => console.log(res))
    .catch(err => console.log(err.response, tag._id));
}
