import * as React from 'react'
import {Fragment} from 'react';
import {TasteCourt} from "./taste-court";
import {ApplicationBar} from "./application-bar/ApplicationBar";

export default () =>
  <Fragment>
    <ApplicationBar/>
    <TasteCourt/>
  </Fragment>
