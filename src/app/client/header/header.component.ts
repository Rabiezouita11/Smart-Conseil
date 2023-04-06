import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleNav() {
    $('.hamburger.animate.plain').toggleClass('active');
    $('.offcanvas-nav').toggleClass('open');
  }
}
