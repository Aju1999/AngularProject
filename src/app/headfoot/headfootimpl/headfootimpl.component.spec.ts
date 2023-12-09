import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadfootimplComponent } from './headfootimpl.component';

describe('HeadfootimplComponent', () => {
  let component: HeadfootimplComponent;
  let fixture: ComponentFixture<HeadfootimplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadfootimplComponent]
    });
    fixture = TestBed.createComponent(HeadfootimplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
