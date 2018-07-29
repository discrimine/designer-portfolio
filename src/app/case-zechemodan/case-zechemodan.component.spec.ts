import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseZechemodanComponent } from './case-zechemodan.component';

describe('CaseZechemodanComponent', () => {
  let component: CaseZechemodanComponent;
  let fixture: ComponentFixture<CaseZechemodanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseZechemodanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseZechemodanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
