import axios from 'axios';
const API_URL = 'http://localhost:4000/users/';

export async function signUp(req){
    let obj = {
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        username: req.username,
        password: req.password
    }
  return axios.post(API_URL, obj)
  .then(response => console.log(response.data))
  .catch(err => console.log(err.message));
}

export async function logIn(id){
    return axios.post(API_URL + id)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

export function deleteAccount(id) {
    axios.delete(API_URL + id)
    .then( response => console.log(response.data))
    .catch(err => console.log(err.message));
    window.location.reload();
}

export async function updateUserInfo(user){
    axios.put(API_URL + user._id, user)
    .then(console.log(user))
    .then( res => console.log(res))
    .catch(err => console.log(err.response, user._id));
}
