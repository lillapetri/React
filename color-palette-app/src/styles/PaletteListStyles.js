export default {
    root: {
        backgroundColor: "wheat",
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
        color: "#000029"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
};
