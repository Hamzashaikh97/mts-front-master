import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtsReleaseScreenComponent } from './mts-release-screen.component';

describe('MtsReleaseScreenComponent', () => {
  let component: MtsReleaseScreenComponent;
  let fixture: ComponentFixture<MtsReleaseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtsReleaseScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtsReleaseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
