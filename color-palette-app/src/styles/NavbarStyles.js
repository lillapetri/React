export default {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'sans-serif',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'lowercase',
        '& a': {
            textDecoration: 'none',
            color: 'black',
        }
    },
    slider: {
        width: '340px',
        margin: '0 10px',
        display: 'inline-block',
        '& .rc-slider-track': {backgroundColor: 'transparent'},
        '& .rc-slider-rail': {
            height: '8px'
        },
        '& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus': {
            backgroundColor: 'lightseagreen', 
            outline: 'none',
            border: '2px solid lightseagreen',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-2px',
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
}