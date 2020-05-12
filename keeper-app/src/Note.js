import React from 'react'
import logo from './logo.png'

function Note() {
    return(
    <div className="Note">
        <img  className="Note__logo" src={logo} alt="pin"/>
        <p className="Note__text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... </p>
    </div>
    );

}


export default Note;