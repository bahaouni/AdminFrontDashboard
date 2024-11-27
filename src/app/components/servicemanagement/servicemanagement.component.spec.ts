import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemanagementComponent } from './servicemanagement.component';

describe('ServicemanagementComponent', () => {
  let component: ServicemanagementComponent;
  let fixture: ComponentFixture<ServicemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicemanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
