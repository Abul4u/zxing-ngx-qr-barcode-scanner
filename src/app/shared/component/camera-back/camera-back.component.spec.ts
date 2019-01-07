import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraBackComponent } from './camera-back.component';

describe('CameraBackComponent', () => {
  let component: CameraBackComponent;
  let fixture: ComponentFixture<CameraBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
