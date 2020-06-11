import React, {Component, createContext} from 'react';

export const LoginContext = createContext();

export class LoginProvider extends Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: window.localStorage.getItem('user') === null? false : true};
        this.toggleLogin = this.toggleLogin.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    toggleLogin(){
        this.setState({isLoggedIn: !this.state.isLoggedIn})       
    }
    logOut(){
        window.localStorage.removeItem('user');
        this.toggleLogin();
        window.location = '/';
    }
    render() {
        return (
        <LoginContext.Provider value={{...this.state, logOut: this.logOut}}>
            {this.props.children}
        </LoginContext.Provider>
        )
    }
}