import { Component, OnInit } from '@angular/core';
import { PlacesService } from './place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [PlacesService]
})
export class PlaceComponent implements OnInit {
  places = [];
  constructor(private placesService:PlacesService) {
    this.places = placesService.getPlaces();
  }

  ngOnInit() {
  }

}
