import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Playbar} from "./Playbar";

storiesOf('Playbar', module)
  .add('Playbar default view', () => {
    return <Playbar/>
  })
  .add('Playbar fake other view', () => {
    return <Playbar/>
  })
