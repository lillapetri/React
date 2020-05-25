import chroma from 'chroma-js';
import sizes from './mediaQueries';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-6px',
        textTransform: 'uppercase',
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%'
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '5%',
        }
    }, 
    boxContent: {
        color: props => chroma.contrast(props.color, 'white') < 4.5 ? ' rgba(0, 0, 0, 0.7)' : 'white',
        position: 'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '10px',
        letterSpacing: '1px',
        fontSize: '12px', 
        display: 'flex',
        justifyContent: 'space-between',
        '&:hover svg': {
            transform: 'scale(1.3)'
        }
    },
    deleteIcon: {
        transition: 'all .3s ease'
    }
};

export default styles;