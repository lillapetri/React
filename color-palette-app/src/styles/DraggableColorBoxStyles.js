import chroma from 'chroma-js';

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