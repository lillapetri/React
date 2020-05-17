import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';

const styles = {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },    
    colors: {
        height: '95%',
        margin: '0',
    },    
    PaletteFooter: {
        margin: '0',
        height: '5%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '1.2rem',
        letterSpacing: '1px',
    }
    
}

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({level: level});
    }
    changeFormat(val){
        this.setState({format: val})
    }
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } =this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => 
        (<ColorBox 
        id={color.id} 
        key={color.id} 
        background={color[format]} 
        name={color.name}
        paletteId={id} 
        showingFullPalette
        moreUrl={`/palette/${id}/${color.id}`}
        />
    ));
        return(
        <div className={classes.Palette}>
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors />
                <div className={classes.colors}>
                {colorBoxes}
            </div>
        <PaletteFooter className={classes.PaletteFooter} paletteName={paletteName} emoji={emoji} />
        </div>
        );
    }
}

export default withStyles(styles)(Palette);