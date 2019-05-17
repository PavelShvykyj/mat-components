import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridShablonComponent } from './grid-shablon.component';

describe('GridShablonComponent', () => {
  let component: GridShablonComponent;
  let fixture: ComponentFixture<GridShablonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridShablonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridShablonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
