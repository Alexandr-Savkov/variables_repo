import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/numbers.reducer';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ShowNumberComponent } from './show-number/show-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ShowNumberComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      numbers: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
