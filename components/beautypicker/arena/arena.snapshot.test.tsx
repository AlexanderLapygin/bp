import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {Arena} from "./Arena";

it('renders correctly', () => {
  const tree = TestRenderer.create(<Arena/>).toJSON()
  expect(tree).toMatchSnapshot()
})
