import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDatatableComponent } from './bill-datatable.component';

describe('BillDatatableComponent', () => {
  let component: BillDatatableComponent;
  let fixture: ComponentFixture<BillDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
