import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoComponent } from './dato.component';

describe('DatoComponent', () => {
  let component: DatoComponent;
  let fixture: ComponentFixture<DatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
