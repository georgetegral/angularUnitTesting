import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';

describe('PlaceComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent]
    });
  });
  it('should create the app', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
});
