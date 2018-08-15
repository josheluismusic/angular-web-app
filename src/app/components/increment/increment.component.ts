import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('inputpercentage') inputpercentage: ElementRef;

  @Input() legend: string = 'Leyenda';
  @Input() percentage: number = 50;

  @Output() onPercentageChangeEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {
    //console.log('legend', this.legend);
    console.log('percentage', this.percentage);
  }

  ngOnInit() {
    //console.log('legend: ', this.legend);
    console.log('percentage', this.percentage);
  }

  onPercentageChange(value: number) {
 
    if (value >= 100) {
      this.percentage = 100;
    } else if (value <= 0) {
      this.percentage = 0
    } else {
      this.percentage = value
    }

    this.inputpercentage.nativeElement.value = this.percentage;

    this.onPercentageChangeEmitter.emit(this.percentage);
  }

  setPercentage(value: number) {

    let percentage = this.percentage + value;
    //console.log(percentage);
    if (percentage > 100 || percentage < 0) {
      return;
    }

    this.percentage = percentage;

    this.inputpercentage.nativeElement.focus();
    this.onPercentageChangeEmitter.emit(this.percentage);
  }

}
