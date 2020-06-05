import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoAppTest extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:4000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => console.log(err));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render() {
        return(
            <h1>{this.state.apiResponse}</h1>
            );
    }
}
export default TodoAppTest;