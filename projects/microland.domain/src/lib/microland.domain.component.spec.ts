import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrolandDomainComponent } from './microland.domain.component';

describe('MicrolandDomainComponent', () => {
  let component: MicrolandDomainComponent;
  let fixture: ComponentFixture<MicrolandDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrolandDomainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrolandDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
