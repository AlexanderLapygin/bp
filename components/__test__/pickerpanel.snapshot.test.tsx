import * as React from "react";
import * as TestRenderer from 'react-test-renderer';
import Panel from "../PPane";


it('renders correctly', () => {
    const tree = TestRenderer.create(<Panel />).toJSON()
    expect(tree).toMatchSnapshot()
})
