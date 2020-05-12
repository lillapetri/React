import React, { Component } from 'react'
import './Dog.css'

class Dog extends Component {   
   
    render() {
        return(
            <div className='row'>
                {this.props.dogs.map(d => (
                    <div key={d.name}>
                    <h2>{d.name}</h2>
                    <img src={d.src} alt={d.name} />
                    <p>Age: {d.age}</p>
                    <p>Facts: {d.facts.map(f => (
                        <li>{f}</li>
                    ))}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Dog;