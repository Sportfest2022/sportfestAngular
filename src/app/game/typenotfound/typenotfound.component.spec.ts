import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypenotfoundComponent } from './typenotfound.component';

describe('TypenotfoundComponent', () => {
  let component: TypenotfoundComponent;
  let fixture: ComponentFixture<TypenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypenotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
