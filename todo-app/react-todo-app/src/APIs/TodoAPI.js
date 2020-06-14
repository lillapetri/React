import axios from 'axios';
import {headers, username, privateRoute, API_URL} from './constants';

// Populate todolist from database
export async function getTodos(){
  return axios.get(API_URL, headers)
  .then(response => {
      console.log('Data received from database.');
      return response.data;
  })
  .catch((err) => {
      console.log(err.message)
  })
}

// Show info about one todo
export async function getTodo(id){
  return axios.get(API_URL + id)
  .then( res => console.log(res))
  .catch(err => console.log(err));
}

// Create new todo
export async function createTodo(val){
  return axios.post(API_URL, val, headers)
  .then(response => response.data)
  .catch(err => console.log(err));
}

// Delete todo
export function removeTodo(id) {
    axios.delete(API_URL + id)
    .then( response => console.log(response.data))
    .catch(err => console.log(err.message));
}

// Update edited todo
export async function updateTodo(todo){
    axios.put(API_URL + todo._id, todo)
    .then(console.log(todo))
    .then( res => console.log(res))
    .catch(err => console.log(err.response, todo._id));
}
