import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemEditComponent } from './line-item-edit.component';

describe('LineItemEditComponent', () => {
  let component: LineItemEditComponent;
  let fixture: ComponentFixture<LineItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineItemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
