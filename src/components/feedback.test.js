import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders "Make your guess!" initially', () => {
    const feedback = 'Make your guess!'
    const wrapper = shallow(<Feedback feedback={feedback} />);
    expect(wrapper.contains(<h2
      key={0}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {feedback}
    </h2>))
  });

});
