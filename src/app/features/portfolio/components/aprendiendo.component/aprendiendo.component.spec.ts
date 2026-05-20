import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendiendoComponent } from './aprendiendo.component';

describe('AprendiendoComponent', () => {
  let component: AprendiendoComponent;
  let fixture: ComponentFixture<AprendiendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprendiendoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AprendiendoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
