import { TestBed } from '@angular/core/testing';

import { AjoutCaissierService } from './ajout-caissier.service';

describe('AjoutCaissierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutCaissierService = TestBed.get(AjoutCaissierService);
    expect(service).toBeTruthy();
  });
});
