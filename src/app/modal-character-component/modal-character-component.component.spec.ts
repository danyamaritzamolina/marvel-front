import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCharacterComponentComponent } from './modal-character-component.component';

describe('ModalCharacterComponentComponent', () => {
  let component: ModalCharacterComponentComponent;
  let fixture: ComponentFixture<ModalCharacterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCharacterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCharacterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
