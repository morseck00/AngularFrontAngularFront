import { TestBed } from '@angular/core/testing';

import { ListeUtilisateurService } from './liste-utilisateur.service';

describe('ListeUtilisateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeUtilisateurService = TestBed.get(ListeUtilisateurService);
    expect(service).toBeTruthy();
  });
});
