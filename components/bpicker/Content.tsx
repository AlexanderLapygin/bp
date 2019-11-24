import * as React from 'react'
import {Grid} from "@material-ui/core";
import PCard from "./PCard";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, background: 'lightgray'}
}

export default () =>
  <Grid container justify="center" spacing={10}>
    <Grid item>
      <PCard title='First title!!!' content='First content' styles={styles}/>
    </Grid>
    <Grid item>
      <PCard title='Second title' content='Second content' styles={styles}/>
    </Grid>
  </Grid>

