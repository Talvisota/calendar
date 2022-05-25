import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { IAppointmentService } from 'src/app/interfaces/services/appointment';

import { CalendarEffects } from './calendar.effects';

describe('CalendarEffects', () => {
  let actions$: Observable<any>;
  let effects: CalendarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalendarEffects,
        IAppointmentService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CalendarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
