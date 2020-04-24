import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 24,
        allColors: [
            'purple', 'aquamarine', 'darkslateblue',
             'yellow', 'lightgreen', 'linen',
            'DeepPink', 'DeepSkyBlue', 'gold',
            'khaki', 'LawnGreen', 'lightblue',
            'lightgray', 'LightSeaGreen', 'LightSalmon',
            'limegreen', 'maroon', 'mediumslateblue',
            'midnightblue', 'navajowhite', 'royalblue',
            'seagreen', 'slateblue', 'teal', 'tomato',
            'indigo', 'indianred', 'dodgerblue', 
            'black', 'orange', 'rebeccapurple'
        ],
    };
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
        <Box colors={this.props.allColors} />
        ));
     return (
     <div>
         <h1>Color palette</h1>
         <div className="BoxContainer">{boxes}</div>
     </div>)
 }
}

export default BoxContainer;