import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertestingformComponent } from './usertestingform.component';

describe('UsertestingformComponent', () => {
  let component: UsertestingformComponent;
  let fixture: ComponentFixture<UsertestingformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsertestingformComponent]
    });
    fixture = TestBed.createComponent(UsertestingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
