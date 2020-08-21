import React from 'react'
import classes from './Appbar.module.css'
import {
  AppBar,
  Toolbar,
  Button,
  ButtonBase,
} from "@material-ui/core";
import coronaImages from "../../images/image.png";


function Appbar() {
    
    return (
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <ButtonBase className={classes.image}>
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
