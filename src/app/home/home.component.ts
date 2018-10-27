import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    [nz-carousel-content] {
      text-align: center;
      height: 270px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }
    h3 {
      color: #fff;
    }
  `]
})
export class HomeComponent implements OnInit {
  array = [ 1, 2, 3, 4 ];

  constructor() { }

  ngOnInit() {
  }

}
