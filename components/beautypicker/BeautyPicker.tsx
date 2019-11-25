import * as React from 'react'
import {Fragment} from 'react';
import {Playbar} from "./playbar/Playbar";
import {Court} from "./court/Court";

export const BeautyPicker = () =>
  <Fragment>
    <Court/>
    <Playbar/>
  </Fragment>
