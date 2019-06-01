import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferirMoedasPage } from './transferirMoedas.page';

describe('TransferirMoedasPage', () => {
  let component: TransferirMoedasPage;
  let fixture: ComponentFixture<TransferirMoedasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferirMoedasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferirMoedasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
