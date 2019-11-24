import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import {Rival} from "./Rival";

it('renders correctly', () => {
  const tree = TestRenderer.create(<Rival/>).toJSON()
  expect(tree).toMatchSnapshot()
})
