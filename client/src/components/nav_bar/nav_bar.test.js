import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav_bar';

it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
});