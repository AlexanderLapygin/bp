import * as React from 'react'
import {storiesOf} from '@storybook/react'
import PCard from "./PCard";

storiesOf('PCard', module)
    .add('PCard with text1', () => {
      return <PCard title="title1" content="Hello World1"/>
    })
    .add('PCard with text2', () => {
        return <PCard title="title2" content="Hello World2"/>
    })
