import { Component, OnInit } from "@angular/core";
import { Car } from "../models/Car";

@Component({
  selector: "app-cars-list",
  templateUrl: "./cars-list.component.html",
  styleUrls: ["./cars-list.component.less"]
})
export class CarsListComponent implements OnInit {
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

  ngOnInit() {}
}
