import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsingHttpComponent } from './crud-using-http.component';

describe('CrudUsingHttpComponent', () => {
  let component: CrudUsingHttpComponent;
  let fixture: ComponentFixture<CrudUsingHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUsingHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
