import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('<Heder/>', () => {
  const header = mount(<Header />);
  test('render Header component', () => {
    expect(header.length).toEqual(1);
  });

  // test('render title', () => {
  //   expect(header.find("h1").text()).toEqual("App test JavaScript full Stack")
  // });


});
