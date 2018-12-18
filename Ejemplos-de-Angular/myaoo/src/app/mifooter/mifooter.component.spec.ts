import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MifooterComponent } from './mifooter.component';

describe('MifooterComponent', () => {
  let component: MifooterComponent;
  let fixture: ComponentFixture<MifooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MifooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MifooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
