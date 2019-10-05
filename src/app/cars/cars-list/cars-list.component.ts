import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Car } from "../models/Car";
import { TotalCostComponent } from "../total-cost/total-cost.component";
import { CarsService } from "../cars.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-cars-list",
  templateUrl: "./cars-list.component.html",
  styleUrls: ["./cars-list.component.less"]
})
export class CarsListComponent implements OnInit, AfterViewInit {
  totalCost: number;
  grossCost: number;
  cars: Car[];
  carForm: FormGroup;

  @ViewChild("totalCostRef", { static: false })
  totalCostRef: TotalCostComponent;

  constructor(
    private carService: CarsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  showGross = (): void => {
    this.totalCostRef.showGross();
  };

  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: ["", Validators.required],
      type: "",
      plate: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(7)]
      ],
      deliveryDate: "",
      deadline: "",
      clientFirstName: "",
      clientLastName: "",
      color: "",
      power: 0,
      cost: 0,
      isFullyDamaged: false,
      year: ""
    });
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

  addCar() {
    this.carService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
    });
  }

  removeCar(car: Car, event) {
    event.stopPropagation();
    this.carService.deleteCar(car.id).subscribe(() => {
      this.loadCars();
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
