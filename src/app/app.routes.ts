import { Routes } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { CompareComponent } from './compare/compare.component';
import { AboutComponent } from './about/about.component';
import { SalesComponent } from './sales/sales.component';
import { PlacesComponent } from './places/places.component';
import { LoginComponent } from './login/login.component';
import { PayComponent } from './pay/pay.component';

export const routes: Routes = [
    { path: '', component: FiltersComponent},
    { path: 'compare', component: CompareComponent},
    { path: 'places', component: PlacesComponent},
    { path: 'Servis-porivniannia-aviareisiv', component: AboutComponent},
    { path: 'Deshevi-kvytky-na-litak', component: SalesComponent},
    { path: 'login', component: LoginComponent},
    { path: 'pay', component: PayComponent}
];