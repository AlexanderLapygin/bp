import * as React from 'react';
import {IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {AppBar} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

export interface ApplicationBarProps {
  /**
   * The title of the application.
   */
  title?: string;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    back: {
      background : '#37474F'
    }
  }),
);

export const ApplicationBar = (props: ApplicationBarProps) => {
  const classes = useStyles({});
  return (
      <AppBar position="static" className={classes.back}> {/* probably not the best practice */}
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
