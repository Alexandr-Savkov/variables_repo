import { NumbersModel } from './../models/numbers.model';
import * as TutorialActions from '../actions/numbers.actions';

const initialState: NumbersModel = {
  value_one: -5,
  value_two: 10
};

export function reducer(state: NumbersModel = initialState, action: TutorialActions.Actions) {

  switch (action.type) {
    case TutorialActions.INCREASE_VALUE_ONE:
      return {...state, value_one: state.value_one + 1};

    case TutorialActions.DECREASE_VALUE_TWO:
      return {...state, value_two: state.value_two - 1};

    case TutorialActions.CHANGE_VALUES:
      state = reducer(state, new TutorialActions.IncreaseValueOne(null));
      state = reducer(state, new TutorialActions.DecreaseValueTwo(null));
      return reducer(state, new TutorialActions.DecreaseValueTwo(null));
    default:
      return state;
  }
}
