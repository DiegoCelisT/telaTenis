import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTenisComponent } from './tela-tenis.component';

describe('TelaTenisComponent', () => {
  let component: TelaTenisComponent;
  let fixture: ComponentFixture<TelaTenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaTenisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaTenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
