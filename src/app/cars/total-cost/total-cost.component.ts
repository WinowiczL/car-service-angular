import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-total-cost",
  templateUrl: "./total-cost.component.html",
  styleUrls: ["./total-cost.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent implements OnChanges {
  @Input() totalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT = 1.23;
  costTreshold = 10000;
  isCostTooLow = false;

  showGross = (): void => {
    this.shownGross.emit(this.totalCost * this.VAT);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isCostTooLow = changes.totalCost.currentValue < this.costTreshold;
  }
}
