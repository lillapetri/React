import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import {ThemeContext} from './contexts/ThemeContext';
import { LanguageContext } from "./contexts/LanguageContext";

const content = {
  english: {
    search: "Search",
    flag: "GB"
  },
  nederlands: {
    search: "Zoeken",
    flag: "NL"
  },
  magyar: {
    search: "Keresés",
    flag: "HU"
  },
  español: {
    search: "Buscar",
    flag: "ES"
  }
}

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode ? 'secondary' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span role='img' aria-label='flag' >{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            App Title 
          </Typography>
          <Switch color='default' onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(Navbar);