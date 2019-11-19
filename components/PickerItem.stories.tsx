import * as React from 'react'
import {storiesOf} from '@storybook/react'
import PickerItem from "./PickerItem";

storiesOf('PickerItem', module)
    .add('PickerItem with text', () => {
        return <PickerItem buttonText1="Hello World"/>
    })
    .add('PickerItem with text1', () => {
        return <PickerItem buttonText1="Hello World!!"/>
    })
