import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUpload64Component } from './ngx-upload64.component';

describe('NgxUpload64Component', () => {
  let component: NgxUpload64Component;
  let fixture: ComponentFixture<NgxUpload64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUpload64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUpload64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
