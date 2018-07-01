import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ProgressService {
  value = 0;
  minValue = 0;
  maxValue = 0;

  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.reset();
  }

  init( mi: number, v: number, ma: number) {
    this.minValue = mi;
    this.maxValue = ma;
    this.setValue(v);
  }

  reset() {
    this.setValue(this.minValue);
  }

  finalize() {
    this.setValue(this.maxValue);
  }

  inc(v: number = 1) {
    this.setValue(this.value + v);
  }

  setValue(v: number) {
    this.value = v;
    //
    let ev = 0;
    const df = this.maxValue - this.minValue;
    if (df > 0) {
      ev = (this.value - this.minValue) / df;
    }
    // console.log(ev);
    this.change.emit(Math.round(ev * 100));
  }

  getValue(): number {
    return this.value;
  }
}
