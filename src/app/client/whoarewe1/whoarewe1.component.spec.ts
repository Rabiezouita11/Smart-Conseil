import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whoarewe1Component } from './whoarewe1.component';

describe('Whoarewe1Component', () => {
  let component: Whoarewe1Component;
  let fixture: ComponentFixture<Whoarewe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Whoarewe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whoarewe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
