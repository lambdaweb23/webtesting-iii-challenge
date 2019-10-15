// Test away!
import React from 'react';

import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
    it('should match snapshot', () => {

        //* This generates a DOM tree from the Display.js *//
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});