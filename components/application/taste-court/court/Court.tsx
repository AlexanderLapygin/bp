import * as React from 'react'
import {Box, Grid} from "@material-ui/core";
import {Rival} from "./Rival";

const styles = {}

export const Court = () =>
  <Box style={{width: '100vw', height: '87vh'}}>
    <Grid container justify="center" spacing={10}>
      <Grid item>
        <Rival title='First title' content='First content' styles={styles}/>
      </Grid>
      <Grid item>
        <Rival title='Second title' content='Second content' styles={styles}/>
      </Grid>
    </Grid>
  </Box>

