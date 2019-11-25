import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Rival} from "./Rival";

storiesOf('Rival', module)
  .add('Rival with text1', () => {
    return <Rival title="title1" content="Hello World1" styles="{}"/>
  })
