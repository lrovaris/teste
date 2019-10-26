import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCategoryComponent } from './side-category.component';

describe('SideCategoryComponent', () => {
  let component: SideCategoryComponent;
  let fixture: ComponentFixture<SideCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
