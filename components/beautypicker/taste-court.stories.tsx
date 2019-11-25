import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {TasteCourt} from "./TasteCourt";

storiesOf('TasteCourt', module)
  .add('TasteCourt default view', () => {
    return <TasteCourt/>
  })
  .add('TasteCourt fake other view', () => {
    return <TasteCourt/>
  })
