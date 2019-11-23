import React from 'react'
import {Toolbar, Typography} from "@material-ui/core";
import {AppBar} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    background: {
      background : '#37474F'
    },
    toolbarBackground: {
      background : 'green'
    }
  }),
);

export const Playbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}> {/* probably not the best practice */}
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Playbar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
