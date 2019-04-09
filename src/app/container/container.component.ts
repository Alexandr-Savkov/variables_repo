import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { NumbersModel } from './../models/numbers.model';
import { AppState } from './../app.state';

import * as TutorialActions from '../actions/numbers.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  numbers: Observable<NumbersModel>;
  timerId;

  constructor(private store: Store<AppState>) {
    this.numbers = store.pipe(select('numbers'));
  }

  change () {
    this.store.dispatch(new TutorialActions.ChangeValues(null) );
  }

  reset () {
    this.stop();
    this.store.dispatch(new TutorialActions.ChangeValues({reset: true}) );
  }

  start() {
    this.timerId = setInterval(() => this.change(), 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }


  ngOnInit() {}

}

