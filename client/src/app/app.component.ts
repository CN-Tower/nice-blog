import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'nice-blog';

  ngAfterViewInit() {
    win.onscroll = () => {
      const appMain: any = document.querySelector('#app-main');
      const sidebar: any = document.querySelector('#sidebar-wrapper');
      const appHeight = appMain.offsetHeight;
      const barHeight = sidebar.offsetHeight;
      if (appHeight > barHeight) {
        const winHeight = win.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        const fixedTop = barHeight - winHeight + 172;
        if (fixedTop > 0 && scrollTop > fixedTop) {
          sidebar.classList.add('position-fixed');
          sidebar.style.top = - fixedTop + 76 + 'px';
        } else {
          sidebar.style.top = 0;
          sidebar.classList.remove('position-fixed');
        }
      } else {
        sidebar.style.top = 0;
        sidebar.classList.remove('position-fixed');
      }
    };
  }
}
