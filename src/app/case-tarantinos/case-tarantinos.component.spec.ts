import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTarantinosComponent } from './case-tarantinos.component';

describe('CaseTarantinosComponent', () => {
  let component: CaseTarantinosComponent;
  let fixture: ComponentFixture<CaseTarantinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseTarantinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTarantinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
