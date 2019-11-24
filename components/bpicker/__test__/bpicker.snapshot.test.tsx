import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {BeautyPicker} from "../BeautyPicker";

it('renders correctly', () => {
  const tree = TestRenderer.create(<BeautyPicker/>).toJSON()
  expect(tree).toMatchSnapshot()
})
