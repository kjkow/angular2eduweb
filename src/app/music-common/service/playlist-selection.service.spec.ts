import { TestBed, inject } from '@angular/core/testing';
import { PlaylistSelectionService } from './playlist-selection.service';


describe('MusicSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistSelectionService]
    });
  });

  it('should be created', inject([PlaylistSelectionService], (service: PlaylistSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
