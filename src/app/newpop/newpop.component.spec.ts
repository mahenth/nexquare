import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpopComponent } from './newpop.component';

describe('NewpopComponent', () => {
  let component: NewpopComponent;
  let fixture: ComponentFixture<NewpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
