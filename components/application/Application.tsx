import * as React from 'react'
import {TasteCourt} from "./taste-court";
import {ApplicationBar} from "./application-bar/ApplicationBar";
import {Box} from "@material-ui/core";

export default () =>
  <Box style={{width: '100vw', height: '100vh'}}>
    <ApplicationBar title="Taste Club"/>
    <TasteCourt/>
  </Box>
