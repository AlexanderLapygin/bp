import * as React from 'react'
import {Fragment} from 'react';
import {Playbar} from "./playbar/Playbar";
import {Arena} from "./arena/Arena";

export const BeautyPicker = () =>
  <Fragment>
    <Arena/>
    <Playbar/>
  </Fragment>
