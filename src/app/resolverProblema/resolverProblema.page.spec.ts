import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverProblemaPage } from './resolverProblema.page';

describe('ResolverProblemaPage', () => {
  let component: ResolverProblemaPage;
  let fixture: ComponentFixture<ResolverProblemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverProblemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverProblemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
