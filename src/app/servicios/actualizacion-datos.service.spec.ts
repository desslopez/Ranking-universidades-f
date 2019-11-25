import { TestBed } from '@angular/core/testing';

import { ActualizacionDatosService } from './actualizacion-datos.service';

describe('ActualizacionDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualizacionDatosService = TestBed.get(ActualizacionDatosService);
    expect(service).toBeTruthy();
  });
});
