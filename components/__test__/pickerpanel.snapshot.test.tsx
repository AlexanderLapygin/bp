// components/__tests__/pickerpanel.snapshot.test.tsx
import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import Button from "../PickerPanel";


it('renders correctly', () => {
    const tree = TestRenderer.create(<Button buttonText="Some Text" />).toJSON()
    expect(tree).toMatchSnapshot()
})
