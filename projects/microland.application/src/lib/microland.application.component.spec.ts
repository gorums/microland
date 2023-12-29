import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrolandApplicationComponent } from './microland.application.component';

describe('MicrolandApplicationComponent', () => {
  let component: MicrolandApplicationComponent;
  let fixture: ComponentFixture<MicrolandApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrolandApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrolandApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
