import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Arena} from "./Arena";

storiesOf('Arena', module)
  .add('Arena default view', () => {
    return <Arena/>
  })
  .add('Arena fake other view', () => {
    return <Arena/>
  })
