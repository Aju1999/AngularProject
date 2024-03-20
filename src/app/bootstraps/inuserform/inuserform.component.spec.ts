import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InuserformComponent } from './inuserform.component';

describe('InuserformComponent', () => {
  let component: InuserformComponent;
  let fixture: ComponentFixture<InuserformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InuserformComponent]
    });
    fixture = TestBed.createComponent(InuserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
