import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  let seedFeedback = [];
  // beforeAll(() => {
  //   for (let i = 0; i )
  // })
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Can add guesses to state', () => {
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();
    instance.makeGuess(45);
    expect(wrapper.state('guesses')[0]).toEqual(45);
  });

  it('Can update feedback', () => {
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();
    instance.makeGuess(45);
    const difference = Math.abs(wrapper.state('guesses')[0] - wrapper.state('correctAnswer'));
    if (difference >= 50) {
      expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
    } else if (difference >= 30) {
      expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
    } else if (difference >= 10) {
      expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
    } else if (difference >= 1) {
      expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
    } else {
      expect(wrapper.state('feedback')).toEqual('You got it!');
    }
  });
});
