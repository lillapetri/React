import sizes from './mediaQueries';

export default {
    root: {
        backgroundColor: 'white',
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, .7), rgba(211, 233, 240, .45)), url("https://images.unsplash.com/photo-1544277811-ce00cbaa4642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1939&q=80")',
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
        [sizes.down('lg')]: {
            width: '80%'
        },
        [sizes.down('sm')]: {
            width: '100%'
        },
    },
    nav: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        width: "100%",
        '& a':{
            color: 'white',
            textDecoration: 'none',
        },
        [sizes.down('sm')]: {
            margin: '1rem 2rem',
        },
        [sizes.down('xs')]: {
            flexDirection: 'column',
        },
    },
    navItem: {
        fontSize: '1.5rem',
        fontWeight: '300',
        padding: '5px 10px',
        backgroundColor: '#CB3E6F',
        borderRadius: '5px',
        transition: '.2s ease',
        '&:hover': {
            backgroundColor: '#071654',
            filter: 'contrast(1.4)',
        },
    },
    title: {
        fontSize: '3rem',
        textShadow: '-2px -3px 4px rgba(255, 255, 255, .15), 1px 2px 4px rgba(0, 0, 0, .35)',
        color: '#071654',
        backgroundPosition: '0 0',
        backgroundSize: '120%',
        fontWeight: '700',
        margin: '0.5rem 0 1rem 0',
        [sizes.down('sm')]: {
            fontSize: '2.2rem',
        },       
    },
    palettes: {
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
