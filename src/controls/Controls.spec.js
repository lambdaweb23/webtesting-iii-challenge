// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('<Controls />', () => {
    it('renders successfully', () => {
        render(<Controls />);
    })
})