import React, {Component, createContext} from 'react';

export const LoginContext = createContext();

export class LoginProvider extends Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false };
    }
    isLoggedIn(){
        return localStorage.getItem('user') ;
        
    }
    render() {
        return (
        <LoginContext.Provider value={{...this.state, toggleLogin: this.toggleLogin}}>
            {this.props.children}
        </LoginContext.Provider>
        )
    }
}