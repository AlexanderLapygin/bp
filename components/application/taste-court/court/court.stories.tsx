import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Court} from "./Court";

storiesOf('Court', module)
  .add('Court default view', () => {
    return <Court/>
  })
