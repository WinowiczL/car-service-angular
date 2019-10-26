import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing-module';
import {AppComponent} from './app.component';
import {CarsModule, CarsService, CarsRoutingModule, CostSharedService} from './cars/index';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CarsModule,
    HttpClientModule,
    CoreModule,
    CarsRoutingModule,
    AppRoutingModule
  ],
  providers: [CarsService, CostSharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
