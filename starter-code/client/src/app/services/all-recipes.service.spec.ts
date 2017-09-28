import { TestBed, inject } from '@angular/core/testing';

import { AllRecipesService } from './all-recipes.service';

describe('AllRecipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllRecipesService]
    });
  });

  it('should be created', inject([AllRecipesService], (service: AllRecipesService) => {
    expect(service).toBeTruthy();
  }));
});
