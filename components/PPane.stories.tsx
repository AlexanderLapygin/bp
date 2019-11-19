import * as React from 'react'
import {storiesOf} from '@storybook/react'
import PPane from './PPane'

storiesOf('PPane', module)
    .add('with text', () => {
        return <PPane buttonText="Hello World"/>
    })
    .add('with text1', () => {
        return <PPane buttonText="Hello World!!!"/>
    })
