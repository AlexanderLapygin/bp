import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {BeautyPicker} from "./BeautyPicker";

storiesOf('BeautyPicker', module)
  .add('BeautyPicker default view', () => {
    return <BeautyPicker/>
  })
  .add('BeautyPicker fake other view', () => {
    return <BeautyPicker/>
  })
