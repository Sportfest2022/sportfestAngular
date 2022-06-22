import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type3formComponent } from './type3form.component';

describe('Type3formComponent', () => {
  let component: Type3formComponent;
  let fixture: ComponentFixture<Type3formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type3formComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type3formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
