import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {Playbar} from "./Playbar";

it('renders correctly', () => {
  const tree = TestRenderer.create(<Playbar/>).toJSON()
  expect(tree).toMatchSnapshot()
})
