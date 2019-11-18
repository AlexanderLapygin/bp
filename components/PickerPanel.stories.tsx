import * as React from 'react'
import {storiesOf} from '@storybook/react'
import PickerPanel from './PickerPanel'

storiesOf('PickerPanel', module)
    .add('with text', () => {
        return <PickerPanel buttonText="Hello World"/>
    })
    .add('with text1', () => {
        return <PickerPanel buttonText="Hello World!!!"/>
    })
