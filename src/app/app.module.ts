import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing-module";
import { AppComponent } from "./app.component";
import { CarsModule } from "./cars/cars.module";
import { CarsService } from "./cars/cars.service";
import { CoreModule } from "./core/core.module";
import { CarsRoutingModule } from "./cars/cars-routing-module";

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
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
