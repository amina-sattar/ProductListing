import React from 'react';
import renderer from 'react-test-renderer';
import {render } from '@testing-library/react';
import Header  from './Header';

describe('test App Header', () => {
  test('test snapshot', () => {
    const component = renderer.create(
      <Header/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
  test('test search box in header', () => {
    const { getByPlaceholderText } = render(<Header/>);
    const searchElement = getByPlaceholderText(/search/i);
    expect(searchElement).toBeInTheDocument();
  })
})