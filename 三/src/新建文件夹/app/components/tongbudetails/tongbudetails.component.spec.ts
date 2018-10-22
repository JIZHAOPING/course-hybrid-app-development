import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbudetailsComponent } from './tongbudetails.component';

describe('TongbudetailsComponent', () => {
  let component: TongbudetailsComponent;
  let fixture: ComponentFixture<TongbudetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbudetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
