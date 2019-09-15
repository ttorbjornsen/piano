import { TestBed } from '@angular/core/testing';

import { ChallengeRepositoryService } from './challenge-repository.service';

describe('ChallengeRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengeRepositoryService = TestBed.get(ChallengeRepositoryService);
    expect(service).toBeTruthy();
  });
});
