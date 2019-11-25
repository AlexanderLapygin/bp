import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import Application from "./Application";

it('renders correctly', () => {
  const tree = TestRenderer.create(<Application/>).toJSON()
  expect(tree).toMatchSnapshot()
})
