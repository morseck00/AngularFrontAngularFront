import { TestBed } from '@angular/core/testing';

import { AjoutPartenaireService } from './ajout-partenaire.service';

describe('AjoutPartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutPartenaireService = TestBed.get(AjoutPartenaireService);
    expect(service).toBeTruthy();
  });
});
