import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles= {
    contrastClass: {
        color: props => chroma.contrast(props.background, 'white') < 4.5 ? ' rgba(0, 0, 0, 0.7)' : 'white',
    },
    ColorBox: {
        width: '20%',
        height: props => props.showingFullPalette? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        textTransform: 'uppercase',
        '&:hover $copyButton': {
            opacity: 1,
            transition: '.3s'
        }
    },
    seeMore: {
        backgroundColor: 'rgb(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0',
        bottom: '0',
        color: 'antiquewhite',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
    },
    copyButton: {
        cursor: 'pointer',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        backgroundColor: 'rgb(255, 255, 255, 0.3)',
        lineHeight: '30px',
        fontSize: '1rem',
        border: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none',
        opacity: '0',
        
    }
    
}

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1400);
        });
    }
    render() {
        const {name, background, paletteId, id, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1 className={classes.contrastClass}>Copied!</h1>
                        <p className={classes.contrastClass}>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                        <span className={classes.contrastClass}>{name}</span>
                        </div>
                    <button className={`${classes.copyButton} ${classes.contrastClass}`}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={`${classes.seeMore} ${classes.contrastClass}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);
