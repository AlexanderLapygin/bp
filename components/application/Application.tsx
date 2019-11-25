import * as React from 'react'
import {TasteCourt} from "./taste-court";
import {ApplicationBar} from "./application-bar/ApplicationBar";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(() => ({
  root: {
  }
}));

export const Application = () => {
  const classes = useStyles({});
  return (
    <Box className={classes.root}>
      <ApplicationBar title="Taste Club"/>
      <TasteCourt/>
    </Box>
  )
}
