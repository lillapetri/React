export default {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },    
    colors: {
        height: '95%',
        margin: '0',
    },
    goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        textTransform: 'uppercase',
        opacity: '1',
        backgroundColor: 'black',
        '& a': {
            color: 'white',
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
            textDecoration: 'none'
        }
    }
    
}