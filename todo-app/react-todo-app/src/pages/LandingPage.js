import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/LandingPageStyles';
import { Button } from '@material-ui/core';

function LandingPage(props){
    const {classes }= props;
    return (
        <main className={classes.root}>
            <div className={classes.header}>
                <h1 className={classes.title}>Are you too busy?</h1>
                <h2 className={classes.title__secondary}> Manage your time with this Todo App!</h2>
            </div>
        </main>
    )
}

export default withStyles(styles)(LandingPage);