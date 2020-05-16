import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

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
        const {name, background, paletteId, id, showLink} = this.props;
        const {copied} = this.state;
        const contrastClass = chroma.contrast(background, 'white') < 4.5 ? 'dark-text' : 'light-text';
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1 className={contrastClass}>Copied!</h1>
                        <p className={contrastClass}>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                        <span className={`${contrastClass}`}>{name}</span>
                        </div>
                    <button className={`copy-button ${contrastClass}`}>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${contrastClass}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
