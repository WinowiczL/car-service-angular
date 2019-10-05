import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Car } from "../models/Car";
import { TotalCostComponent } from "../total-cost/total-cost.component";
import { CarsService } from "../cars.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cars-list",
  templateUrl: "./cars-list.component.html",
  styleUrls: ["./cars-list.component.less"]
})
export class CarsListComponent implements OnInit, AfterViewInit {
  totalCost: number;
  grossCost: number;
  cars: Car[];

  @ViewChild("totalCostRef", { static: false })
  totalCostRef: TotalCostComponent;

  constructor(private carService: CarsService, private router: Router) {}

  showGross = (): void => {
    this.totalCostRef.showGross();
  }

  ngOnInit() {
    this.loadCars();
  }

  goToCarDetails(car: Car) {
    this.router.navigate(["/cars", car.id]);
  }

  loadCars() {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  ngAfterViewInit() {}

  countTotalCost(): void {
    this.totalCost = this.cars
      .map(car => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross = (grossCost: number): void => {
    this.grossCost = grossCost;
  };
}
