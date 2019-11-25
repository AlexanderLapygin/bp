import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {Court} from "./Court";

it('renders correctly', () => {
  const tree = TestRenderer.create(<Court/>).toJSON()
  expect(tree).toMatchSnapshot()
})
