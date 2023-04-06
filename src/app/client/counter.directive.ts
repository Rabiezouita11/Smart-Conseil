import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective implements OnInit {
  @Input() endValue!: number;
  @Input() duration!: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    let start = 0;
    let increment = Math.round(this.endValue / (this.duration / 10));
    const element = this.elementRef.nativeElement;

    const interval = setInterval(() => {
      start += increment;
      if (start > this.endValue) {
        clearInterval(interval);
        start = this.endValue;
      }
      element.innerHTML = start.toLocaleString();
    }, 10);
  }
}
