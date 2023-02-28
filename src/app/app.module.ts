import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './api-rick-and-morty/components/card-list/card-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './api-rick-and-morty/components/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiRickAndMortyComponent } from './api-rick-and-morty/api-rick-and-morty.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { FormComponent } from './crud/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    NavBarComponent,
    PaginationComponent,
    ApiRickAndMortyComponent,
    LandingPageComponent,
    TodoListComponent,
    WeatherComponent,
    FormComponent,
    CrudComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [CrudComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
