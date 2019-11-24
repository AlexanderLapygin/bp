import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Rival} from "./Rival";

storiesOf('Rival', module)
  .add('Rival with text1', () => {
    // @ts-ignore
    return <Rival title="title1" content="Hello World1"/>
  })
  .add('Rival with text2', () => {
    // @ts-ignore
    return <Rival title="title2" content="Hello World2"/>
  })
