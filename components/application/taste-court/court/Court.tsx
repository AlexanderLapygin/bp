import * as React from 'react'
import {Grid} from "@material-ui/core";
import {Rival} from "./Rival";

const styles = {
}

export const Court = () =>
  <Grid container justify="center" spacing={10}>
    <Grid item>
      <Rival title='First title' content='First content' styles={styles}/>
    </Grid>
    <Grid item>
      <Rival title='Second title' content='Second content' styles={styles}/>
    </Grid>
  </Grid>

