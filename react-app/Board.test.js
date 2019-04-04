import React from 'react';
import { Board } from './cmpts';
import renderer from 'react-test-renderer';

test('Snapshot Tests for Board', () => {
  const component = renderer.create(<Board onClick={() => {}} squares={["X","O",,"x","o",,"This is a test","I am anoather test","Last test"]} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Snapshot Tests for Board where things dont go right', () => {
  expect(() => {
    const component = renderer.create(<Board onClick={() => {}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  }).toThrow();
});
