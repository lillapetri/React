import axios from 'axios';

export default function DeleteTodo(id) {
    axios.delete('http://localhost:4000/' + id)
    .then( response => console.log(response.data))
    .catch(err => console.log(err.message));
    window.location.reload();
}