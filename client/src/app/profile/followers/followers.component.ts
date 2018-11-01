import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.less']
})
export class FollowersComponent implements OnInit {
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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
