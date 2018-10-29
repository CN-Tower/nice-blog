import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  nodes: any[] = [ {
    title   : 'parent 1',
    key     : '100',
    expanded: true,
    children: [ {
      title   : 'parent 1-0',
      key     : '1001',
      expanded: true,
      children: [
        { title: 'leaf', key: '10010', isLeaf: true },
        { title: 'leaf', key: '10011', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-1',
      key     : '1002',
      children: [
        { title: 'leaf', key: '10020', isLeaf: true }
      ]
    }]
  }, {
    title   : 'parent 2',
    key     : '100',
    expanded: true,
    children: [ {
      title   : 'parent 2-0',
      key     : '1001',
      expanded: true,
      children: [
        { title: 'leaf', key: '20010', isLeaf: true },
        { title: 'leaf', key: '20011', isLeaf: true }
      ]
    }, {
      title   : 'parent 2-1',
      key     : '2002',
      children: [
        { title: 'leaf', key: '20020', isLeaf: true }
      ]
    } ]
  }];

  constructor() { }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  ngOnInit() {
  }

}
