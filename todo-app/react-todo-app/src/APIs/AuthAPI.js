import axios from 'axios';
import {headers} from './constants'
export const API_URL = 'http://localhost:4000/index/';

export function login(obj){
  const data = {
    email: obj.email,
    password: obj.password
  }
  return axios.post(API_URL + '/login', data, headers)
  .then(res => {if(res.status === 200) {    
    console.log(res)}})
  .catch(err => console.log(err) )
}

// Delete user account
export function deleteAccount(id) {
    axios.delete(API_URL + id)
    .then( response => console.log(response.data))
    .catch(err => console.log(err.message));
    window.location.reload();
}

// Update user info
export async function updateUserInfo(user){
    axios.put(API_URL + user._id, user)
    .then(console.log(user))
    .then( res => console.log(res))
    .catch(err => console.log(err.response, user._id));
}
