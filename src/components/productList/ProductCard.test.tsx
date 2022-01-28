import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Article } from '../../types';

test('renders the ProductCard', () => {
  const article: Article = {
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
  }
  const { getByText } = render(<ProductCard  article={article}/>);
  const linkElement = getByText(/bed/i);
  expect(linkElement).toBeInTheDocument();
});
