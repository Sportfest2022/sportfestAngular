import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2formComponent } from './type2form.component';

describe('Type2formComponent', () => {
  let component: Type2formComponent;
  let fixture: ComponentFixture<Type2formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type2formComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type2formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
