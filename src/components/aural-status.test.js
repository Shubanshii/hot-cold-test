import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders the status', () => {
    const status = 'Hot';
    const wrapper = shallow(<AuralStatus auralStatus={status} />);
    expect(wrapper.contains(<p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {status}
    </p>)).toEqual(true);
  });
});
