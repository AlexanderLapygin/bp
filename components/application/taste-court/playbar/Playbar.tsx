import * as React from 'react'
import {createStyles, Toolbar, Typography} from "@material-ui/core";
import {AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      background: '#37474F'
    }
  }),
);

export const Playbar = () => {
  const classes = useStyles({});
  return (
    <AppBar position="relative" className={classes.background}> {/* probably not the best practice */}
      <Toolbar>
        <Typography variant="h6">
          Playbar
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
