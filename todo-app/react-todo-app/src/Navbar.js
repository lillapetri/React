import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Button, Link } from '@material-ui/core';

import useToggleState from './hooks/UseToggleState';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  logo: {
  },
  menuButton: {
    padding: '0 10px',
    border: '1px solid transparent',
    transition: 'all .2s ease-in-out',
    '&:hover':{
      borderColor: 'rgba(255, 255, 255, .8)',
      textShadow: '1px 1px 2px #2B3777'
    }
  },
  navItems: {
    marginRight: '0',
    width: '85%',
    display: 'flex',
    justifyContent: 'flex-end', 
    alignItems: 'center'
    
  } 
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const classes = useStyles();
  const [isLoggedIn, setLogin] = useToggleState();
  const handleLogin = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setLogin();
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Button className={classes.logo} color='inherit' href='/' >MERN Stack Todo App</Button>
          <div className={classes.navItems}>
            {isLoggedIn ? 
            <> 
            <Typography color='inherit'>Welcome back!</Typography>
            <Button className={classes.menuButton} color='inherit' disableTouchRipple onClick={handleLogin}>Log out</Button> 
            </>:
            <>
            <Button href='/signup' className={classes.menuButton} disableTouchRipple  color='inherit'>Sign up</Button>
            <Button href='/login' className={classes.menuButton} color='inherit' disableTouchRipple>Log in</Button>
            <Button href='/todos' className={classes.menuButton} disableTouchRipple  color='inherit'>Try out</Button>
            </>}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
