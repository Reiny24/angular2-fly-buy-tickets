import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Сервіс порівняння авіарейсів');

    this.metaService.updateTag({ name: 'keywords', content: 'порівняння подорожей, бронювання авіаквитків, найкращий сервіс, найкращі умови подорожі, ексклюзивні пропозиції, незабутні враження' });
                                                             
    
    this.metaService.updateTag({ name: 'description', content: 'FlyBuyTickets - провідний ресурс для порівняння подорожей та забезпечення найкращих умов подорожі. Наш сервіс пропонує найкращий сервіс у бронюванні авіаквитків та ексклюзивні пропозиції. Дізнайтеся про нашу історію, команду експертів, що гарантує незабутні враження під час вашої подорожі.' });
  }
}
