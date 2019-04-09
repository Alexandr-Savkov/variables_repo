import {DecreaseValueTwo, IncreaseValueOne, ChangeValues} from './numbers.actions'

import {DECREASE_VALUE_TWO, INCREASE_VALUE_ONE, CHANGE_VALUES} from './numbers.actions';


describe('DecreaseValueTwo', () => {
  it('should create an action', () => {
    const action = new DecreaseValueTwo(null);

    expect(action.type).toEqual(DECREASE_VALUE_TWO);
  });
});

describe('IncreaseValueOne', () => {
  it('should create an action', () => {
    const action = new IncreaseValueOne(null);

    expect(action.type).toEqual(INCREASE_VALUE_ONE);
  });
});

describe('ChangeValues', () => {
  it('should create an action', () => {
    const action = new ChangeValues(null);

    expect(action.type).toEqual(CHANGE_VALUES);
  });
});
