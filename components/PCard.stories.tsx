import * as React from 'react'
import {storiesOf} from '@storybook/react'
import PCard from "./PCard";

storiesOf('PCard', module)
    .add('PCard with text', () => {
        return <PCard cardText="Hello World"/>
    })
    .add('PCard with text1', () => {
        return <PCard cardText="Hello World!!"/>
    })
