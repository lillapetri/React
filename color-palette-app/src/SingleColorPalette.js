import React, { Component } from 'react'
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }
    gatherShades(palette, colorId) {
        let shades = [];
        let allColors = palette.colors;
     
        for (let color in allColors) {
            shades.push(allColors[color].find(color => color.id === colorId));
        }
        return shades.slice(1); //remove 50 level color object
    }
    
    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} />
        ));
        return (
            <div className="Palette">
                <h1> Single Color Palette</h1>
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}

export default SingleColorPalette;