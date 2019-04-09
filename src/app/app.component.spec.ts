import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ShowNumberComponent } from './show-number/show-number.component';
import { StoreModule } from '@ngrx/store';
import {reducer} from "./reducers/numbers.reducer";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        ShowNumberComponent
      ],
      imports: [
        StoreModule.forRoot({
          numbers: reducer
        })
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
