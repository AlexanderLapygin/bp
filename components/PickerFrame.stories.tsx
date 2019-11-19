import * as React from 'react'
import {storiesOf} from '@storybook/react'
import PickerFrame from "./PickerFrame";

storiesOf('PickerFrame', module)
    .add('PickerFrame with text', () => {
        return <PickerFrame frameText="Hello World"/>
    })
    .add('PickerFrame with text1', () => {
        return <PickerFrame frameText="Hello World!!"/>
    })
