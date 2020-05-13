import React, { Component } from 'react';
import Select from "@material-ui/core/Select";
import Slider from 'rc-slider';
import'rc-slider/assets/index.css';
import './Navbar.css';
import { MenuItem, IconButton } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { format: "hex", open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    handleFormatChange(evt) {
        this.setState({format: evt.target.value, open: true});
        this.props.handleChange(evt.target.value);
    }
    closeSnackbar(){
        this.setState({open: false})
    }

    render() {
        const { level, changeLevel, handleFormatChange } = this.props;
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
                    <Select value={format} onChange={handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff </MenuItem>
                        <MenuItem value="rgb">RGB - #ffffff </MenuItem>
                        <MenuItem value="rgba">RGBA - #ffffff </MenuItem>
                    </Select>
                </div>
                <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                open={this.state.open}
                autoHideDuration={3000}
                message={<span id="message-id" >Format changed to: {format.toUpperCase()}</span>}
                ContentProps={{"aria-describedby": "message-id"}}
                onClose={this.closeSnackbar}
                action={[<IconButton onClick={this.closeSnackbar} color="inherit" key="close"
                aria-label="close">
                <CloseIcon/>
                </IconButton>]}
                />
            </header>
        )
    }
}

export default Navbar;