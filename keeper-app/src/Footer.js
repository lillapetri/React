import React, { Component } from 'react'

const author = "Lilla Petri";
const year = new Date().getFullYear();

class Footer extends Component {
    render() {
        return(<div className="Footer">
        &copy; {author} {year} 
        </div>)
    }
}

export default Footer;