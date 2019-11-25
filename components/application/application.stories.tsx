import * as React from 'react'
import {storiesOf} from '@storybook/react'
import Application from "./Application";

storiesOf('Application', module)
  .add('Application default view', () => {
    return <Application/>
  })
