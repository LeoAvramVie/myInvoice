import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatonPageComponent } from './authenticaton-page.component';

describe('AuthenticatonPageComponent', () => {
  let component: AuthenticatonPageComponent;
  let fixture: ComponentFixture<AuthenticatonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
