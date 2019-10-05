import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Car } from "./models/Car";
import { Observable } from "rxjs";
import { CarsService } from "./cars.service";

@Injectable({
  providedIn: "root"
})
export class CarResolveService implements Resolve<Car> {
  constructor(private carsService: CarsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Car> | Promise<Car> | Car {
    return this.carsService.getCar(route.params.id);
  }
}
