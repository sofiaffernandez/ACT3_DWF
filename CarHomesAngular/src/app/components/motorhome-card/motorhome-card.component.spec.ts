import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorhomeCardComponent } from './motorhome-card.component';

describe('MotorhomeCardComponent', () => {
  let component: MotorhomeCardComponent;
  let fixture: ComponentFixture<MotorhomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorhomeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorhomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
