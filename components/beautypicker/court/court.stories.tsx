import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Court} from "./Court";

storiesOf('Arena', module)
  .add('Court default view', () => {
    return <Court/>
  })
  .add('Court fake other view', () => {
    return <Court/>
  })
