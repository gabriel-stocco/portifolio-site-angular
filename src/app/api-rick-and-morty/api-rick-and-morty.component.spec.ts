import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRickAndMortyComponent } from './api-rick-and-morty.component';

describe('ApiRickAndMortyComponent', () => {
  let component: ApiRickAndMortyComponent;
  let fixture: ComponentFixture<ApiRickAndMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRickAndMortyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRickAndMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
