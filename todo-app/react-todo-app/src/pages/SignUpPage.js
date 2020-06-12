import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {LoginContext} from '../contexts/LoginContext';
import {API_URL} from '../APIs/AuthAPI';
import axios from 'axios';

const styles = ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: '2rem',
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: '2rem auto',
  },
});

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      response: ''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSignUp = (e) => {
    const self = this;
    e.preventDefault();
    let obj = Object.assign({}, this.state);
    axios.post(API_URL, obj)
      .then(res => {if(res.status){
        localStorage.setItem('user', res.data.user.username);
        window.location = '/todos';
      }})
      .catch(err => {
        if(err.response.status) self.setState({response: err.response.data.message})
      })
  }

  static contextType = LoginContext;
  render() {
    const classes = this.props;
    return (
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography style={{textAlign: 'center', padding: '1rem'}} component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={this.handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  onChange={this.handleChange}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  onChange={this.handleChange}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  onChange={this.handleChange}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  onChange={this.handleChange}
                  fullWidth
                  id="username"
                  label="Username "
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  onChange={this.handleChange}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="rememberMe" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              {this.state.response && <Typography style={{color: 'red', margin: '0 auto 1rem auto'}}>{this.state.response}</Typography>}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
              MERN Stack Todo App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUp);