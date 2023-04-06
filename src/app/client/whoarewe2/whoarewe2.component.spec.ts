import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whoarewe2Component } from './whoarewe2.component';

describe('Whoarewe2Component', () => {
  let component: Whoarewe2Component;
  let fixture: ComponentFixture<Whoarewe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Whoarewe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whoarewe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
