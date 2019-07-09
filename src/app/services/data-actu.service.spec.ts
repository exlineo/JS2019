import { TestBed } from '@angular/core/testing';

import { DataActuService } from './data-actu.service';

describe('DataActuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataActuService = TestBed.get(DataActuService);
    expect(service).toBeTruthy();
  });
});
