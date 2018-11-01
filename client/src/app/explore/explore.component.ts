import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExploreService } from './explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.less']
})
export class ExploreComponent implements OnInit {
  isShowFilter: Boolean = this.exploreService.toggleFilter.isShow;
  viewRouter: 'find-article' | 'find-user';

  constructor(private router: Router, private exploreService: ExploreService) { }

  ngOnInit() {
    if (this.router.url.includes('/find-user')) {
      this.viewRouter = 'find-user';
    } else {
      this.viewRouter = 'find-article';
    }
  }

  toggleFilter() {
    this.isShowFilter = !this.isShowFilter;
    this.exploreService.toggleFilter.isShow = this.isShowFilter;
  }

  onViewChange() {
    this.router.navigateByUrl(`/explore/${this.viewRouter}`);
  }
}
