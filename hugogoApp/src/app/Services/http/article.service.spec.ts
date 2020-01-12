/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpArticleService } from './article.service';

describe('Service: Backend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpArticleService]
    });
  });

  it('should ...', inject([HttpArticleService], (service: HttpArticleService) => {
    expect(service).toBeTruthy();
  }));
});
