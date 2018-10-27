import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  inputValue: string;
  optionGroups: any[];

  onChange(value: any): void {
    console.log(value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [{
        title: '话题',
        children: [{
          title: 'AntDesign',
          count: 10000
        },         {
          title: 'AntDesign UI',
          count: 10600
        }]
      },              {
        title: '问题',
        children: [{
          title: 'AntDesign UI 有多好',
          count: 60100
        },         {
          title: 'AntDesign 是啥',
          count: 30010
        }]
      },              {
        title: '文章',
        children: [{
          title: 'AntDesign 是一个设计语言',
          count: 100000
        }]
      }];
    }, 1000);
  }

}
