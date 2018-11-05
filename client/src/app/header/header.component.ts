import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

type CurRouter = '/home' | '/article' | '/explore' | '/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  curRouter: CurRouter;
  inputValue: string;
  optionGroups: any[];

  constructor(private router: Router) { }

  onChange(value: any): void {
    console.log(value);
  }

  goToRouter(routerUrl: string) {
    this.router.navigateByUrl(routerUrl);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        document.scrollingElement.scrollTop = 0;
        ['/home', '/article', '/explore', '/profile'].forEach((rt: CurRouter) => {
          if (this.router.url.startsWith(rt)) this.curRouter = rt;
        });
      }
    });
    setTimeout(() => {
      this.optionGroups = [{
        title: '文章',
        children: [{
          title: '耐思博客很Nice!',
          count: 10000
        },         {
          title: 'Markdown编辑器使用方法',
          count: 10600
        }]
      }, {
        title: '用户',
        children: [{
          title: 'CN-Tower',
          count: 60100
        },         {
          title: 'AntDesign 是啥',
          count: 30010
        }]
      }];
    }, 1000);
  }

}
