import React from 'react'
import {Grid} from "@material-ui/core";
import PCard from "../PCard";
// import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
// import {Paper} from "@material-ui/core";

export const Content = () =>
  <Grid container>
    <Grid item sm>
      <PCard title='First title' content='First content'/>
    </Grid>
    <Grid item sm>
      <PCard title='Second title' content='Second content'/>
    </Grid>
  </Grid>

