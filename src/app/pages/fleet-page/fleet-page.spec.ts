import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetPage } from './fleet-page';

describe('FleetPage', () => {
  let component: FleetPage;
  let fixture: ComponentFixture<FleetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
