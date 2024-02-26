import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCharactersComponentComponent } from './lista-characters-component.component';

describe('ListaCharactersComponentComponent', () => {
  let component: ListaCharactersComponentComponent;
  let fixture: ComponentFixture<ListaCharactersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCharactersComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCharactersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
