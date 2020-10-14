/* eslint-disable */
import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme';
import showCard from '../showCard';
import preload from '../../data.json';
import e from 'express';

console.log(`Node ENV: ${process.env.NODE_ENV}`);

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(showCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(showCard).length).toEqual(showCount);
});
