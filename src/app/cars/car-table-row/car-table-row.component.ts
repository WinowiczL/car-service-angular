import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../models/Car';

@Component({
  selector: '[app-car-table-row]',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.less']
})
export class CarTableRowComponent {

  @Input()
  car: Car;

  @Input()
  carIndex: number;

  @Output()
  removedCar = new EventEmitter();

  removeCar(car, event) {
    event.stopPropagation();
    this.removedCar.emit(car);
  }

}
