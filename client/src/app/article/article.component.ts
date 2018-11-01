import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  isShowFilter: Boolean = this.articleService.toggleFilter.isShow;
  isManaging: Boolean = this.articleService.toggleManage.isManaging;
  viewRouter: 'my-article' | 'my-collection';

  constructor( private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    if (this.router.url.includes('/my-collection')) {
      this.viewRouter = 'my-collection';
    } else {
      this.viewRouter = 'my-article';
    }
  }

  toggleFilter() {
    this.isShowFilter = !this.isShowFilter;
    this.articleService.toggleFilter.isShow = this.isShowFilter;
  }

  toggleManage() {
    this.isManaging = !this.isManaging;
    this.articleService.toggleManage.isManaging = this.isManaging;
  }

  onChangeView() {
    this.router.navigateByUrl(`/article/${this.viewRouter}`);
  }
}
