import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEnviarPage } from './tabEnviar.page';

describe('TabEnviarPage', () => {
  let component: TabEnviarPage;
  let fixture: ComponentFixture<TabEnviarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabEnviarPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEnviarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
