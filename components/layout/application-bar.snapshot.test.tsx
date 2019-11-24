import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {ApplicationBar} from "./ApplicationBar";

it('renders correctly', () => {
  const tree = TestRenderer.create(<ApplicationBar/>).toJSON()
  expect(tree).toMatchSnapshot()
})
