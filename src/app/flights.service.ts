import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private selectedFlight: any;
  private from: string = '';
  private to: string = '';
  private shipping: string = '';
  private returning: string = '';
  private place: number = 1;
  private salon: string = '';
  private oneWay: boolean = true;
  
  setFilters(from: string, to: string, shipping: string, returning: string, place: number, salon: string, oneWay: boolean) {
    this.from = from;
    this.to = to;
    this.shipping = shipping;
    this.returning = returning;
    this.place = place;
    this.salon = salon;
    this.oneWay = oneWay;
  }

  getFilters() {
    return { from: this.from, to: this.to, shipping: this.shipping, returning: this.returning, place: this.place, salon: this.salon, oneWay: this.oneWay};
  }

  setSelectedFlight(flight: any) {
    this.selectedFlight = flight;
  }

  getFlightById() {
    return this.selectedFlight;
  }
}