import chroma from 'chroma-js';
import sizes from './mediaQueries';

export default {
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
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: props => props.showingFullPalette? '20%' : '33.33333%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: props => props.showingFullPalette? '10%' : '20%',
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: props => props.showingFullPalette? '5%' : '10%',
        },
        
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
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        fontSize: '12px',
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform .6s ease-in-out',
        transform: 'scale(0.1)',
    },
    showOverlay: {
        opacity: '1',
        zIndex: '10',
        transform: 'scale(50)',
        position: 'absolute',
    },
    copyMessage: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'antiquewhite',
        backfaceVisibility: 'hidden',
        textShadow: '2px 2px 2px rgba(0, 0, 0, .2)',
        '& h1': {
            fontWeight: '400',
            backgroundColor: 'rgb(255, 255, 255, 0.3)',
            width: '100%',
            padding: '1rem',
            textAlign: 'center',
            marginBottom: '0',
            [sizes.down('sm')]: {
                fontSize: '5rem'
            },
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100'
        }
    },
    showMessage: {
        transition: 'all 0.6 ease-in-out',
        transitionDelay: '0.2s',
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
    }
    
}

