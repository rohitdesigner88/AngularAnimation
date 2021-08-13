import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimboxComponent } from './animbox.component';

describe('AnimboxComponent', () => {
  let component: AnimboxComponent;
  let fixture: ComponentFixture<AnimboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
