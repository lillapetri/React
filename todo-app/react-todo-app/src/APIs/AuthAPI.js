import axios from 'axios';
const API_URL = 'http://localhost:4000/users/';

// Create new user in the database
export async function signUp(req){
  return axios.post(API_URL, req.body)
  .then(response => console.log(response.data))
  .catch(err => console.log(err.message));
}

// Search for user data about one particular user
export async function logIn(name){
    return axios.post(API_URL + name)
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
