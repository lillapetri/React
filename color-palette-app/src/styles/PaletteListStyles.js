export default {
    root: {
        backgroundColor: 'white',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, .3) 30%, rgba(255, 255, 255, .2)), url("https://images.unsplash.com/photo-1544277811-ce00cbaa4642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1939&q=80")',
        backgroundPosition: 'center',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", 
        overflow: 'scroll',
    },
    container: {
        width: "50%",
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    nav: {
        marginTop: '2rem',
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        width: "100%",
        '& a':{
            color: '#1A3077',
            textDecoration: 'none',
        },
    },
    navItem: {
        fontSize: '1.5rem',
        padding: '5px 10px',
        backgroundColor: '#FEE736',
        borderRadius: '5px',
        position: 'absolute',
        top: '7rem',
        right: '2.5rem',
        '&:hover': {
            backgroundColor: '#FF7200',
            filter: 'contrast(1.4)'
        },
    },
    title: {
        fontSize: '2.5rem',
        filter: 'drop-shadow(1px 2px 3px rgba(0, 0, 0, .6))',
        color: '#1A3077',
        backgroundPosition: '0 0',
        backgroundSize: '120%',
        fontWeight: '700',
        position: 'absolute',
        top: '.8rem',
        right: '2.5rem'
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
};
