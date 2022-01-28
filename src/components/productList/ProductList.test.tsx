import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';
import { Article } from '../../types';

test('renders the ProductList', () => {
  const articles: Article[] =[{
    name: 'bed',
    variantName:' variant',
    images: [{
      path: 'path',
    }],
    prices:{
      currency : 'EUR',
      regular:{
        value: 3199
      }
    }
  }]
  const { getByText } = render(<ProductList categoryName="Furniture" articleCount={60} articles={articles}/>);
  const linkElement = getByText(/Furniture/i);
  expect(linkElement).toBeInTheDocument();
});
