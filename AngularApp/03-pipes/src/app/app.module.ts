import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContraseniaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-MX'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
