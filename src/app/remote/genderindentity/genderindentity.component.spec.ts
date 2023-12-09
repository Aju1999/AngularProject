import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderindentityComponent } from './genderindentity.component';

describe('GenderindentityComponent', () => {
  let component: GenderindentityComponent;
  let fixture: ComponentFixture<GenderindentityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderindentityComponent]
    });
    fixture = TestBed.createComponent(GenderindentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
