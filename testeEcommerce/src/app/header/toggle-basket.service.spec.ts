import { TestBed } from '@angular/core/testing';

import { ToggleBasketService } from './toggle-basket.service';

describe('ToggleBasketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToggleBasketService = TestBed.get(ToggleBasketService);
    expect(service).toBeTruthy();
  });
});
