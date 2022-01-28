import React from 'react';
import renderer from 'react-test-renderer';
import { ChildCategory } from '../types';
import SideBar  from './SideBar';
import {render } from '@testing-library/react';

const dummyCategories: ChildCategory[] = [{
  name: 'Test Category',
  urlPath:'/test-category'
}]

describe('test side bar', () => {
  test('snapshot test', () => {
    const component = renderer.create(
      <SideBar categories={dummyCategories}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
  test('test category name exist', () => {
    const { getByText } = render(<SideBar  categories={dummyCategories}/>);
    const searchElement = getByText(/test category/i);
    expect(searchElement).toBeInTheDocument();
  })
})
