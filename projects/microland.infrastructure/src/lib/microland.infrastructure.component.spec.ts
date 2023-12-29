import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrolandInfrastructureComponent } from './microland.infrastructure.component';

describe('MicrolandInfrastructureComponent', () => {
  let component: MicrolandInfrastructureComponent;
  let fixture: ComponentFixture<MicrolandInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrolandInfrastructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrolandInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
