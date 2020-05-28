export default {
    root: {
        backgroundColor: "rgb(7, 22, 84)",
        overflow: 'hidden',
        border: '3px solid #0a1338',
        borderRadius: "3px",
        boxShadow: '0 0 1.5rem rgba(0, 0, 0, .35)',
        padding: "0rem",
        position: "relative",
        cursor: "pointer",
        '&:hover $deleteIcon': {
            opacity: '1',
        },
    },
    colors: {
        height: "150px",
        width: "100%",
        borderRadius: "3px",
        backgroundColor: "#dae1e4",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0",
        color: "white",
        padding: '3px',
        fontSize:"1rem",
        fontWeight: '400',
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"
    },
    deleteIcon: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '2rem',
        opacity: '0',
        transition: 'opacity 120ms ease-in-out',
        zIndex: '10',
        padding: '6px',
        color: 'white',
        backgroundColor: '#e11d23'
    },
       
}