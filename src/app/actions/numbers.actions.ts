import { Action } from '@ngrx/store';

export const INCREASE_VALUE_ONE    = '[NUMBERS] Increase';
export const DECREASE_VALUE_TWO    = '[NUMBERS] Decrease';
export const CHANGE_VALUES    = '[NUMBERS] Change';

export class IncreaseValueOne implements Action {
  readonly type = INCREASE_VALUE_ONE;

  constructor(public payload: any) {}
}

export class DecreaseValueTwo implements Action {
  readonly type = DECREASE_VALUE_TWO;

  constructor(public payload: any) {}
}

export class ChangeValues implements Action {
  readonly type = CHANGE_VALUES;

  constructor(public payload: any) {}
}


export type Actions = IncreaseValueOne | DecreaseValueTwo | ChangeValues;
