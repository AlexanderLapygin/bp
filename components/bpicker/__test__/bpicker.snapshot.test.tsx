import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {BPicker} from "../BPicker";

it('renders correctly', () => {
  const tree = TestRenderer.create(<BPicker/>).toJSON()
  expect(tree).toMatchSnapshot()
})
