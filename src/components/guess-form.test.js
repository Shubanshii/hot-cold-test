import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    wrapper.find('input[type="number"]').instance().value = 45;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith('45');
  });

  it('Should not fire onMakeGuess if the input is empty', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    wrapper.simulate('submit');
    expect(callback).not.toHaveBeenCalled();
  });
});
