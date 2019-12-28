import { Injectable } from "@angular/core";

@Injectable()

export class PlacesService{
    places = [
        {id:1, name: 'Los bienes de Jessy'},
        {id:2, name: 'Electronica Yorg'},
    ];
    getPlaces(){
        return this.places;
    }
}