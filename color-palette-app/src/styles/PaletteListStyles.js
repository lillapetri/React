import sizes from './mediaQueries';

export default {
    '@global':{
        '.fade-exit': {
            opacity: 1,
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 400ms ease-out'
        }
    },
    root: {
        backgroundColor: '#abc4e0',
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, .75) 25%, #94cbf7)',
        backgroundPosition: 'center',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", 
        overflow: 'scroll',
    },
    container: {
        position: 'relative',
        width: "50%",
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
        [sizes.down('lg')]: {
            width: '80%'
        },
        [sizes.down('sm')]: {
            width: '100%'
        },
    },
    title: {
        fontSize: '3rem',
        textShadow: '-1px -2px 3px rgba(255, 255, 255, .15), 1px 2px 4px rgba(0, 0, 0, .35)',
        color: '#071654',
        fontWeight: '700',
        margin: '1rem',
        [sizes.down('md')]: {
            fontSize: '2.5rem',
        },       
        [sizes.down('sm')]: {
            fontSize: '2rem',
            marginLeft: '2.5rem'
        },       
        [sizes.down('xs')]: {
            fontSize: '1.5rem',
        },       
    },
    nav: {
        position: 'static',
        top: '0',
        marginBottom: '1rem',
        paddingTop: '.5rem',
        zIndex: 100,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
        textDecoration: 'none',
        textTransform: 'uppercase',
        width: "100%",
        '& a':{
            textDecoration: 'none',
        },
        [sizes.down('sm')]: {
            margin: '1rem 0',
        },
    },
    NavContent: {
        display: "flex",
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px'
    },
    menuIcon: {
        color: '#071654',
        marginRight: '1rem',
        marginLeft: '2rem',
        width: '2.6rem',
        height: '2.6rem',
        cursor: 'pointer',
        borderRadius: '50%',
        
        [sizes.down('sm')]: {
            margin: '0 5px',
            width: '1.5rem',
            height: '1.5rem',
            padding: '.3rem',
        }, 
    },
    navItem: {
        display: 'block',
        color: '#071654',
        fontSize: '16px',
        transition: 'all .4s ease-out',
        '&:hover': {
            transform: 'translateX(10px)',
            fontWeight: 600
        }
    },
    palettes: {
        position: 'relative',
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down('sm')]: {
            margin: '1rem',
            gridTemplateColumns: "repeat(2, 47.5%)",
        },
        [sizes.down('xs')]: {
            width: '70%',
            gridGap: "1.5rem",
            margin: '0 auto',
            gridTemplateColumns: "repeat(1, 100%)",
        },
    }
};
