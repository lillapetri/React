import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/Palette';

class PaletteList extends Component {
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { palettes, classes, deletePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.title}>React colors</h1>
                        <PaletteIcon className={classes.menuIcon}/>
                        <div className={classes.navContent}>
                        <Link className={classes.navItem} to='/palette/new'>Create palette</Link>
                        <Link to='/' onClick={this.props.resetPalettes} className={classes.navItem} >Reset default palettes</Link>
                        </div>
                        
                    </nav>
                    <TransitionGroup className={classes.palettes}>            
                        {palettes.map(palette => (
                            <CSSTransition
                            key={palette.id}
                            classNames='fade'
                            timeout={500}>
                                <MiniPalette 
                                {...palette} 
                                handleClick={() => this.goToPalette(palette.id)}
                                key={palette.id}
                                id={palette.id}
                                deletePalette={deletePalette}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);