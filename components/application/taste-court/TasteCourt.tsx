import * as React from 'react'
import {Playbar} from "./playbar/Playbar";
import {Court} from "./court/Court";
import {Box} from "@material-ui/core";

export const TasteCourt = () =>
  <Box>
    <Court />
    <Playbar/>
  </Box>
