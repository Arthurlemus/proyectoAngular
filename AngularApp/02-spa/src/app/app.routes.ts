import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FiltroComponent } from './components/filtro/filtro.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'filtro/:heroe', component: FiltroComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }