import React, { Component } from 'react';
import Select from "@material-ui/core/Select";
import Slider from 'rc-slider';
import'rc-slider/assets/index.css';
import './Navbar.css';
import { MenuItem } from '@material-ui/core';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { format: "hex" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({format: evt.target.value});
        this.props.handleChange(evt.target.value)
    }

    render() {
        const { level, changeLevel, handleChange } = this.props;
        const { format } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">Color palette </a>
                </div>
                <div className="slider-container">
                <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                        defaultValue={level} 
                        min={100} max={900} 
                        step={100}
                        onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff </MenuItem>
                        <MenuItem value="rgb">rgb - #ffffff </MenuItem>
                        <MenuItem value="rgba">rgba - #ffffff </MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar;