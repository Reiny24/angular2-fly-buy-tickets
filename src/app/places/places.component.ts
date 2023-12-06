import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../flights.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css'
})
export class PlacesComponent {
  flightId: any;
  flightData: any;
  data = { "title": "Київ, Бориспіль - Варшава, Модлін", "date": "2023-12-13", "time": "14:00", "place": 5, "econom": [false, 600], "business": [true, 800], "first": [true, 1000], "id": 1, "countries": ["Україна", "Польща"] };

  places = [
    [{ seat: 0, id:  0, isSelected: false }, { seat: 0, id: 1, isSelected: false },
     { seat: 1, id:  2, isSelected: false }, { seat: 1, id: 3, isSelected: false },
     { seat: 0, id:  4, isSelected: false }, { seat: 1, id: 5, isSelected: false },
     { seat: 0, id:  6, isSelected: false }, { seat: 1, id: 7, isSelected: false }],

    [{ seat: 1, id:  8, isSelected: false }, { seat: 1, id: 9, isSelected: false },
     { seat: 0, id: 10, isSelected: false }, { seat: 0, id: 11, isSelected: false },
     { seat: 0, id: 12, isSelected: false }, { seat: 1, id: 13, isSelected: false },
     { seat: 0, id: 14, isSelected: false }, { seat: 1, id: 15, isSelected: false }],

    [{ seat: 1, id: 16, isSelected: false }, { seat: 1, id: 17, isSelected: false }, { seat: 0, id: 18, isSelected: false },
     { seat: 0, id: 19, isSelected: false }, { seat: 0, id: 20, isSelected: false }, { seat: 0, id: 21, isSelected: false },
     { seat: 0, id: 22, isSelected: false }, { seat: 1, id: 23, isSelected: false }, { seat: 0, id: 24, isSelected: false },
     { seat: 0, id: 25, isSelected: false }, { seat: 1, id: 26, isSelected: false }, { seat: 0, id: 27, isSelected: false }],
    
    [{ seat: 1, id: 28, isSelected: false }, { seat: 1, id: 29, isSelected: false }, { seat: 0, id: 30, isSelected: false },
     { seat: 0, id: 31, isSelected: false }, { seat: 0, id: 32, isSelected: false }, { seat: 0, id: 33, isSelected: false },
     { seat: 0, id: 34, isSelected: false }, { seat: 1, id: 35, isSelected: false }, { seat: 0, id: 36, isSelected: false },
     { seat: 0, id: 37, isSelected: false }, { seat: 1, id: 38, isSelected: false }, { seat: 0, id: 39, isSelected: false }],

    [{ seat: 1, id: 40, isSelected: false }, { seat: 1, id: 41, isSelected: false }, { seat: 0, id: 42, isSelected: false },
     { seat: 0, id: 43, isSelected: false }, { seat: 0, id: 44, isSelected: false }, { seat: 0, id: 45, isSelected: false },
     { seat: 0, id: 46, isSelected: false }, { seat: 1, id: 47, isSelected: false }, { seat: 0, id: 48, isSelected: false },
     { seat: 0, id: 49, isSelected: false }, { seat: 1, id: 50, isSelected: false }, { seat: 0, id: 51, isSelected: false },
     { seat: 0, id: 52, isSelected: false }, { seat: 1, id: 53, isSelected: false }, { seat: 0, id: 54, isSelected: false },
     { seat: 0, id: 55, isSelected: false }, { seat: 1, id: 56, isSelected: false }, { seat: 0, id: 57, isSelected: false }],

    [{ seat: 1, id: 58, isSelected: false }, { seat: 1, id: 59, isSelected: false }, { seat: 0, id: 60, isSelected: false }, 
     { seat: 0, id: 61, isSelected: false }, { seat: 0, id: 62, isSelected: false }, { seat: 0, id: 63, isSelected: false },
     { seat: 0, id: 64, isSelected: false }, { seat: 1, id: 65, isSelected: false }, { seat: 0, id: 66, isSelected: false },
     { seat: 0, id: 67, isSelected: false }, { seat: 1, id: 68, isSelected: false }, { seat: 0, id: 69, isSelected: false },
     { seat: 0, id: 70, isSelected: false }, { seat: 1, id: 71, isSelected: false }, { seat: 0, id: 72, isSelected: false },
     { seat: 0, id: 73, isSelected: false }, { seat: 1, id: 74, isSelected: false }, { seat: 0, id: 75, isSelected: false }]
  ];

  selected: boolean = false;
  cartPrice: number = 0;

  previousId: number = -1;
  previousElement: number = -1;

  price = 0;
  baggageValue: number = 0;

  bought: boolean = false;
  
  constructor(private route: ActivatedRoute, private flightsService: FlightsService) {}

  ngOnInit() {
      this.flightData = this.flightsService.getFlightById() || this.data;
  }

  handlePlaceChange(element: number, id: number, price: number) {
    if (this.previousElement >= 0) {
      const previousePlace = this.places[this.previousElement].find(place => place.id === this.previousId);

      if (previousePlace) {
        previousePlace.isSelected = false;
      }
    }

    const foundPlace = this.places[element].find(place => place.id === id);

    if (foundPlace) {
      foundPlace.isSelected = !foundPlace.isSelected;
      this.previousId = id;
      this.previousElement = element;
      this.price = price;
      this.selected = true;
    }
  }
 
  updateCart() {
    this.bought = true;
    this.cartPrice += this.price;
  }

  changeBaggage (value: number) {
    this.baggageValue = value;
  }
}
