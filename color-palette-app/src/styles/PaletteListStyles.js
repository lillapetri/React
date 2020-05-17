export default {
    root: {
        backgroundImage: "url('https://images.unsplash.com/photo-1589306962951-b3da28bfdfac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", 
        overflow: 'scroll'
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: 'center',
        fontSize: '1.2rem',
        color: "#000023",
        textTransform: 'uppercase',
        textShadow: '1px 1px 2px rgba(0, 0, 0, .3)',
        letterSpacing: '1px',
        '& a': {
            color: 'inherit',
            padding: '.5rem 1rem',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: '400',
            transition: 'all .4s ease',
            '&:hover': {
                transform: 'scale(1.1)'
            }
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
};
