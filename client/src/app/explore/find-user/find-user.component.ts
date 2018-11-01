import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../explore.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.less']
})
export class FindUserComponent implements OnInit {
  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 5'
    },
    {
      title: 'Ant Design Title 6'
    },
    {
      title: 'Ant Design Title 7'
    },
    {
      title: 'Ant Design Title 8'
    },
    {
      title: 'Ant Design Title 9'
    },
    {
      title: 'Ant Design Title 10'
    },
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 5'
    },
    {
      title: 'Ant Design Title 6'
    }
  ];

  constructor(public exploreService: ExploreService) { }

  ngOnInit() {
  }

}
