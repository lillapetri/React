import sizes from './mediaQueries';

export default {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '10px',
        height: '6vh',
    },
    logo: { 
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        fontFamily: 'sans-serif',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'lowercase',
        '& a': {
            textDecoration: 'none',
            color: '#0a1338',
        },
        [sizes.down('sm')]: {
            display: 'none',
        }
    },
    slider: {
        width: '43vw',
        margin: '0 5vh',
        display: 'inline-block',
        '& .rc-slider-track': {backgroundColor: 'transparent'},
        '& .rc-slider-rail': {
            height: '8px'
        },
        '& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus': {
            backgroundColor: '#2579b1', 
            outline: 'none',
            border: '2px solid #2579b1',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-2px',
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
    }
}