import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {TasteCourt} from "./TasteCourt";

it('renders correctly', () => {
  const tree = TestRenderer.create(<TasteCourt/>).toJSON()
  expect(tree).toMatchSnapshot()
})
