import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type1formComponent } from './type1form.component';

describe('Type1formComponent', () => {
  let component: Type1formComponent;
  let fixture: ComponentFixture<Type1formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type1formComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type1formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
