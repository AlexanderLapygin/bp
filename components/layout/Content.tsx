import React from 'react'
import {Grid} from "@material-ui/core";
import PCard from "../PCard";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10}
}

export const Content = () =>
  <Grid container>
    <Grid item sm>
      <PCard title='First title' content='First content' styles={styles}/>
    </Grid>
    <Grid item sm>
      <PCard title='Second title' content='Second content' styles={styles}/>
    </Grid>
  </Grid>

