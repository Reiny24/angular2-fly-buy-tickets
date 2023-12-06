import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlightsService } from '../flights.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ FormsModule, RouterModule ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  constructor(private titleService: Title, private metaService: Meta, private flightsService: FlightsService) { }

  ngOnInit() {
    this.titleService.setTitle('Міжнародні авіаквитки');

    this.metaService.updateTag({ name: 'keywords', content: 'міжнародні подорожі, найдешевший рейс, найшвидший рейс, найдешевший місяць, цінові оповіщення' });
    
    this.metaService.updateTag({ name: 'description', content: 'Порівняйте та бронюйте міжнародні авіаквитки на FlyBuyTickets, знаходячи найдешевші та найшвидші рейси. Отримуйте цінові оповіщення та вибирайте найдешевший місяць для вашої подорожі. Виберіть напрямок, дати вильоту та прильоту, кількість пасажирів та клас салону для найзручнішого перельоту' });
  }

  from: string = '';
  to: string = '';
  shipping: any;
  returning: any;
  adults: number = 1;
  children: number = 0;
  salon: string = '';
  oneWay: boolean = true;

  decreaseAdults() {
    if (this.adults > 1) {
        this.adults--;
    }
  }

  increaseAdults() {
      this.adults++;
  }

  decreaseChildren() {
      if (this.children > 0) {
          this.children--;
      }
  }

  increaseChildren() {
      this.children++;
  }

  sendData() {
    this.flightsService.setFilters(this.from, this.to, this.shipping, this.returning, this.adults + this.children, this.salon, this.oneWay);
  }
}
