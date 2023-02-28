import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRickAndMortyComponent } from './api-rick-and-morty/api-rick-and-morty.component';
import { CrudComponent } from './crud/crud.component';
import { FormComponent } from './crud/form/form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoadingComponent } from './loading/loading.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WeatherComponent } from './weather/weather.component';



const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:"api-rick&morty", component: ApiRickAndMortyComponent},
  {path: "toDo-list", component: TodoListComponent},
  {path: "clima-atual", component: WeatherComponent},
  {path: "crud", component: CrudComponent},
  {path: "crud/formulário",  component: FormComponent},
  {path: "loading",  component: LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
