import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogbreedsComponent } from './dogbreeds.component';

describe('DogbreedsComponent', () => {
  let component: DogbreedsComponent;
  let fixture: ComponentFixture<DogbreedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogbreedsComponent]
    });
    fixture = TestBed.createComponent(DogbreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
