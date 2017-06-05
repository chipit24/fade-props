import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import FadeProps from '../index';

beforeAll(() => jest.useFakeTimers());
beforeEach(() => setTimeout.mockClear());
  
test('renders a single child', () => {
  const child = <div key="first">First</div>;
  const fadeProps = ReactTestUtils.renderIntoDocument(
    <FadeProps>{child}</FadeProps>
  );
  const fadePropsNode = ReactDOM.findDOMNode(fadeProps);
  
  expect(setTimeout.mock.calls.length).toBe(0);
  expect(fadePropsNode.textContent).toEqual('First');
});

test('removes the old child and renders the next child after 200ms', () => {
  const node = document.createElement('div');
  const first = <div key="first">First</div>;
  const second = <div key="second">Second</div>;
  
  const fadeProps = ReactDOM.render(<FadeProps>{first}</FadeProps>, node);
  const fadePropsNode = ReactDOM.findDOMNode(fadeProps);
  
  expect(fadePropsNode.textContent).toBe('First');
  
  ReactDOM.render(<FadeProps>{second}</FadeProps>, node)
  expect(fadePropsNode.textContent).not.toBe('Second');
  
  jest.runAllTimers();
  expect(fadePropsNode.textContent).toBe('Second');
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(200);
});

test('removes the old child and renders the next child after 1000ms', () => {
  const node = document.createElement('div');
  const first = <div key="first">First</div>;
  const second = <div key="second">Second</div>;
  
  const fadeProps = ReactDOM.render(<FadeProps animationLength={1000}>{first}</FadeProps>, node);
  const fadePropsNode = ReactDOM.findDOMNode(fadeProps);
  
  expect(fadePropsNode.textContent).toBe('First');
  
  ReactDOM.render(<FadeProps>{second}</FadeProps>, node)
  expect(fadePropsNode.textContent).not.toBe('Second');
  
  jest.runAllTimers();
  expect(fadePropsNode.textContent).toBe('Second');
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(1000);
});

test('removes the current child if the next child is undefined', () => {
  const node = document.createElement('div');
  const first = <div key="first">First</div>;
  
  const fadeProps = ReactDOM.render(<FadeProps>{first}</FadeProps>, node);
  const fadePropsNode = ReactDOM.findDOMNode(fadeProps);
  
  expect(fadePropsNode.textContent).toBe('First');
  
  ReactDOM.render(<FadeProps></FadeProps>, node)
  expect(fadePropsNode.textContent).toBe('First');
  
  jest.runAllTimers();
  expect(fadePropsNode.textContent).toBe('');
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(200);
});
