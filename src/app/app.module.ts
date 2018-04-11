import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PruebaComponent } from './components/prueba/prueba.component';

import { appRouting } from './app.routes';
import { PruebaService } from './services/prueba.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    appRouting
  ],
  providers: [PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
