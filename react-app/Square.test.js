import React from 'react';
import { Square } from './cmpts';
import renderer from 'react-test-renderer';

test('Snapshot Tests for Square', () => {
  const component = renderer.create(<Square onClick={() => {}} value="" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const componentX = renderer.create(<Square onClick={() => {}} value="X" />);
  const treeX = componentX.toJSON();
  expect(treeX).toMatchSnapshot();

  const componentO = renderer.create(<Square onClick={() => {}} value="O" />);
  const treeO = componentO.toJSON();
  expect(treeO).toMatchSnapshot();
});
