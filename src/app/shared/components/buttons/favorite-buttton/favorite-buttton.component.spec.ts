import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteButttonComponent } from './favorite-buttton.component';

describe('FavoriteButttonComponent', () => {
  let component: FavoriteButttonComponent;
  let fixture: ComponentFixture<FavoriteButttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteButttonComponent]
    });
    fixture = TestBed.createComponent(FavoriteButttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
