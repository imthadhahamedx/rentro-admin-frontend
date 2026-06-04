import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHeader } from './home-page-header';

describe('HomePageHeader', () => {
  let component: HomePageHeader;
  let fixture: ComponentFixture<HomePageHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
