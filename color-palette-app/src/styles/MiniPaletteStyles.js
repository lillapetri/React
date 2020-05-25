export default {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        border: '1px solid #1A3077',
        boxShadow: '0 0 1rem rgba(0, 0, 0, .2)',
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        '&:hover $deleteIcon': {
            opacity: '1',
        },
    },
    colors: {
        height: "150px",
        width: "100%",
        backgroundColor: "#dae1e4",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "#18003b",
        paddingTop: "0.5rem",
        fontSize:"1rem",
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
    delete: {        
        position: 'relative',      
    },
    deleteIcon: {
        position: 'absolute',
        top: '0',
        right: '0',
        opacity: '0',
        transition: 'opacity 120ms ease-in-out',
        zIndex: '10',
        padding: '3px 5px',
        color: 'white',
        backgroundColor: '#eb3d30'
    },
       
}