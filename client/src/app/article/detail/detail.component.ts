import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  from: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

    });
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.from = queryParams.from ? queryParams.from : 'home';
    });
  }

  goBack() {
    history.back();
  }
}
