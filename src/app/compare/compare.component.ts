import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export class CompareComponent {
  flights: any;
  filters: any;
  filteredFlights: any;
  filteredFlightsBack: any;
  oneWay: boolean=true;
  from: boolean=true;

  constructor(private http: HttpClient, private flightsService: FlightsService) {}

  ngOnInit() {
    this.http.get('assets/flights.json').subscribe(data => {
      this.flights = data;
      this.filters = this.flightsService.getFilters();
      this.oneWay = this.filters.oneWay;
      this.filterData();
    });
  }

  filterData() {
    this.filteredFlights = this.flights.filter((flight: any) => {
      if (this.filters.from && this.filters.from !== '') {
        if (flight.countries[0] !== this.filters.from) {
          return false;
        }
      }
  
      if (this.filters.to && this.filters.to !== '') {
        if (flight.countries[1] !== this.filters.to) {
          return false;
        }
      }

      if (this.filters.shipping && this.filters.shipping !== '') {
        if (flight.date !== this.filters.shipping) {
          return false;
        }
      }

      if (this.filters.place && this.filters.place !== 1) {
        if (flight.place <= this.filters.place) {
          return false;
        }
      }

      if (this.filters.salon && this.filters.salon !== '') {
        if (this.filters.salon === 'Економ' && !flight.econom[0]) {
          return false;
        }
        else if (this.filters.salon === 'Бізнес' && !flight.business[0]) {
          return false;
        }
        else if (this.filters.salon === 'Перший' && !flight.first[0]) {
          return false;
        }
      }

      // if (!this.filters.oneWay) {
      //   const matchingFlight = this.flights.find((otherFlight: any) => {
      //     return otherFlight.countries[1] === flight.countries[0] && otherFlight.countries[0] === flight.countries[1];
      //   });

      //   if (matchingFlight) console.log(flight.countries, matchingFlight.countries)
    
      //   return !!matchingFlight; // Повертає true, якщо знайдено збіг
      // }
    
      return true;
    });

    if (!this.filters.oneWay) {
      this.filteredFlightsBack = this.flights.filter((flight: any) => {
        if (this.filters.from && this.filters.from !== '') {
          if (flight.countries[1] !== this.filters.from) {
            return false;
          }
        }
    
        if (this.filters.to && this.filters.to !== '') {
          if (flight.countries[0] !== this.filters.to) {
            return false;
          }
        }
  
        if (this.filters.returning && this.filters.returning !== '') {
          if (flight.date !== this.filters.returning) {
            return false;
          }
        }
  
        if (this.filters.place && this.filters.place !== 1) {
          if (flight.place <= this.filters.place) {
            return false;
          }
        }
  
        if (this.filters.salon && this.filters.salon !== '') {
          if (this.filters.salon === 'Економ' && !flight.econom[0]) {
            return false;
          }
          else if (this.filters.salon === 'Бізнес' && !flight.business[0]) {
            return false;
          }
          else if (this.filters.salon === 'Перший' && !flight.first[0]) {
            return false;
          }
        }
      
        return true;
      });
    }
  }

  switchWay (value: boolean) {
    this.from = value;
  }

  sendData(flightId: any) {
    const selectedFlight = this.flights.find((element: any) => element.id === flightId);
    this.flightsService.setSelectedFlight(selectedFlight);
  }
}
