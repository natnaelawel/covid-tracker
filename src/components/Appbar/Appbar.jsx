import React from 'react'
import classes from './Appbar.module.css'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  ButtonBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import coronaImages from "../../images/image.png";


function Appbar() {
    
    return (
      <AppBar position="sticky" color="7b1fa2">
        <Toolbar className={classes.toolbar}>
          <ButtonBase focussRipple className={classes.image}>
            <img
              src={coronaImages}
              alt="covid background"
              className={classes.image}
            />
          </ButtonBase>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
}

export default Appbar
