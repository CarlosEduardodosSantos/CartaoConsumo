import { TestBed } from '@angular/core/testing';

import { CartaoConsumoService } from './cartao-consumo.service';

describe('CartaoConsumoService', () => {
  let service: CartaoConsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartaoConsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
