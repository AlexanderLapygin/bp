import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {ApplicationBar} from "./ApplicationBar";

it('renders correctly by default', () => {
  const tree = TestRenderer.create(<ApplicationBar/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with title', () => {
  const tree = TestRenderer.create(<ApplicationBar title="title example"/>).toJSON()
  expect(tree).toMatchSnapshot()
})
