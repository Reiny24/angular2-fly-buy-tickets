import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {

  flights = [
    {title: 'Київ, Бориспіль - Варшава, Модлін', time: '13.11.23 14:00', place: '3A', price: 600, id: 1},
    {title: 'Київ, Бориспіль - Варшава, Модлін', time: '13.11.23 19:30', place: '15D', price: 700, id: 2},
    {title: 'Київ, Бориспіль - Варшава, Модлін', time: '14.11.23 15:00', place: '8C', price: 750, id: 3},
    {title: 'Київ, Бориспіль - Варшава, Модлін', time: '15.11.23 14:00', place: '12A', price: 600, id: 4},
    {title: 'Київ, Бориспіль - Варшава, Модлін', time: '15.11.23 14:00', place: '6B', price: 600, id: 5}
  ];

  firstname: string = '';
  lastname: string = '';
  mobile: string = '';
  selectedPaymentMethod: string = '';

  handleDelete(id: number): void {
    this.flights = this.flights.filter(flight => flight.id !== id);
    console.log(this.flights.length);
  }

}
