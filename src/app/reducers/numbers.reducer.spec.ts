import * as fromNumbers from './numbers.reducer';

import * as fromActions from '../actions/numbers.actions';
import { NumbersModel } from '../models/numbers.model';

describe('NumbersReducer Default', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromNumbers;
      const action = {};
      const state: NumbersModel = fromNumbers.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });
});

describe('NumbersReducer Increase', () => {
  describe('increase action', () => {
    it('should return the numbers after increase', () => {
      const { initialState } = fromNumbers;
      const action = new fromActions.IncreaseValueOne(null);
      const state: NumbersModel = fromNumbers.reducer(initialState, action);

      expect(state.value_one).toBe(-4);
    });
  });
});

describe('NumbersReducer Decrease', () => {
  describe('increase action', () => {
    it('should return the numbers after decrease', () => {
      const { initialState } = fromNumbers;
      const action = new fromActions.DecreaseValueTwo(null);
      const state: NumbersModel = fromNumbers.reducer(initialState, action);

      expect(state.value_two).toBe(9);
    });
  });
});

describe('NumbersReducer Change', () => {
  describe('increase action', () => {
    it('should return the numbers after change', () => {
      const { initialState } = fromNumbers;
      const action = new fromActions.ChangeValues(null);
      const state: NumbersModel = fromNumbers.reducer(initialState, action);

      expect(state.value_one).toBe(-4);
      expect(state.value_two).toBe(8);
    });
  });
});
