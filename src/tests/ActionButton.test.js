import React from 'react';
import { shallow, /*mount*/ } from 'enzyme';
import { ActionButton } from '../components/ActionButton';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

test('Render with label', () => {
  const label = 'TEST'
  const withLabel = shallow(<ActionButton label={label} />);
  expect(withLabel.text()).toEqual(label);
});

test('Render with children', () => {
  const children = <span>CHILDREN</span>
  const withChildren = shallow(<ActionButton>{children}</ActionButton>);
  expect(withChildren.text()).toEqual('CHILDREN');
});

test('Disabled will add proper class', () => {
  const disabledButton = shallow(<ActionButton disabled={true} />);
  expect(disabledButton.hasClass('r-action-button-disabled')).toEqual(true);
});

test('Click button with sinon', () => {
  const spy = sinon.spy();
  const btn = shallow(<ActionButton onClick={spy} />);
  btn.simulate('click');
  expect(spy.calledOnce).toBe(true);
});

test('Click button', () => {
  let callCount = 0
  const spy = () => callCount++
  const btn = shallow(<ActionButton onClick={spy} />);
  btn.simulate('click');
  expect(callCount).toEqual(1)
});

test('Inactive click for disabled button', () => {
  const spy = sinon.spy();
  const disabledButton = shallow(<ActionButton disabled={true} onClick={spy} />);
  disabledButton.simulate('click');
  expect(spy.notCalled).toBe(true);
});