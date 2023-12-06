import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Дешеві квитки на літак');

    this.metaService.updateTag({ name: 'keywords', content: 'родинні тури, знижки на авіаквитки, осінні розпродажі, промокоди на авіаквитки, акції для зареєстрованих' });
    
    this.metaService.updateTag({ name: 'description', content: 'Ознайомтеся з поточними акціями та знижками на авіаквитки на FlyBuyTickets. Використовуйте промокоди на авіаквитки для отримання знижок під час родинних турів. Вигідні осінні розпродажі та спеціальні акції для зареєстрованих користувачів' });
  }
}
