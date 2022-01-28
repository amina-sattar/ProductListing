import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('test app', () => {
  const xhrMock: Partial<XMLHttpRequest> = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    onload: jest.fn(),
    status: 200,
    response: 'Hello World!'
  };

  // @ts-ignore
  jest.spyOn(window, "XMLHttpRequest").mockImplementation(() => xhrMock as XMLHttpRequest);
  render(<App/>)
  expect(xhrMock.open).toBeCalledWith('POST', '/graphql');
  expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json');
  expect(xhrMock.send).toHaveBeenCalled();
});