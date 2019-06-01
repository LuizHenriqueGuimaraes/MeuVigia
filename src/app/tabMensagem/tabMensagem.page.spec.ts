import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMensagemPage } from './tabMensagem.page';

describe('TabMensagemPage', () => {
  let component: TabMensagemPage;
  let fixture: ComponentFixture<TabMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabMensagemPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
