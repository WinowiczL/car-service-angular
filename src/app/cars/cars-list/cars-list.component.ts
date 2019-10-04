import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Car } from "../models/Car";
import { TotalCostComponent } from "../total-cost/total-cost.component";

@Component({
  selector: "app-cars-list",
  templateUrl: "./cars-list.component.html",
  styleUrls: ["./cars-list.component.less"]
})
export class CarsListComponent implements OnInit, AfterViewInit {
  totalCost: number;
  grossCost: number;

  @ViewChild("totalCostRef", { static: false })
  totalCostRef: TotalCostComponent;
  cars: Car[] = [
    {
      id: 1,
      model: "Mazda",
      plate: "GD1231",
      deliveryDate: new Date("21-04-2020"),
      deadline: new Date("05-05-2020"),
      client: {
        firstName: "Jan",
        lastName: "Kowalski"
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: "Opel",
      plate: "ADzxc31",
      deliveryDate: new Date("11-01-2020"),
      deadline: new Date("05-02-2020"),
      client: {
        firstName: "Adam",
        lastName: "Malysz"
      },
      cost: 500,
      isFullyDamaged: false
    }
  ];

  constructor() {}

  showGross = (): void => {
    this.totalCostRef.showGross();
  };

  ngOnInit() {
    this.countTotalCost();
  }

  ngAfterViewInit() {

  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map(car => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross = (grossCost: number): void => {
    this.grossCost = grossCost;
  }
}
