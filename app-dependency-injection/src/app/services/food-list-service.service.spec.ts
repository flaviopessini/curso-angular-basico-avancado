import { TestBed } from '@angular/core/testing';

import { FoodListService } from './food-list-service.service';

describe('FoodServiceService', () => {
  let service: FoodListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
