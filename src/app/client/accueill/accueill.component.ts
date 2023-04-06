import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel';

@Component({
  selector: 'app-accueill',
  templateUrl: './accueill.component.html',
  styleUrls: ['./accueill.component.css'],
  animations: [
    trigger('slideInDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ])
  ]
})
export class AccueillComponent implements AfterViewInit{
  @ViewChild('owlCarousel') owlCarousel!: ElementRef;



  ngAfterViewInit(): void {


    $(document).ready(function () {
      (function ($) {
        $('.carousel').owlCarousel(

          {
            items: 1,
            loop: true,

            dots: true,
            margin: 2,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,

            responsive: {
              768: {
                items: 2
              },
              992: {
                items: 2
              },
              1200: {
                items: 3
              }
            }
          }
        );
        $('.basic-slider').owlCarousel(

          {
            items: 1,
            loop: true,

            dots: true,
            margin: 2,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,

           
          }
        );
          $('.owl-carousel').owlCarousel(

            {
              items: 1,
              loop: true,
              nav: true,
              dots: true,
              margin: 2,
              autoplay: true,
              autoplayTimeout: 5000,
              autoplayHoverPause: true,
              navText: ['<i  class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],

            }
          );
      })(jQuery);
  });





  }

}
