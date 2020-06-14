export const headers = Object.assign({}, {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${window.localStorage.getItem('token')}`
    }
})
export const username = localStorage.getItem('user');
export const privateRoute = window.location.href.indexOf('mytodos') > -1;
export const API_URL = privateRoute? 
`http://localhost:4000/todos/${username}`:
'http://localhost:4000/todos/';
