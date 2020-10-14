/* eslint-disable */
import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme'; 


console.log(`Node ENV: ${process.env.NODE_ENV}`);

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
