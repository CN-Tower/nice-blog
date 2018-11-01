import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  userId: String;
  isUserSelf: Boolean;
  activeTabIdx: number;
  viewList: String[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url.includes('/user/')) {
      this.isUserSelf = false;
      this.viewList = ['article', 'collection', 'followers', 'following'];
      this.userId = this.router.url.split('/user/')[1].split('/')[0];
    } else {
      this.isUserSelf = true;
      this.viewList = ['history', 'followers', 'following', 'setting'];
    }
    let flag = false;
    this.viewList.forEach((view, idx) => {
      if (this.router.url.includes(`/${view}`)) {
        flag = true;
        this.activeTabIdx = idx;
      }
    });
    if (!flag) this.activeTabIdx = 0;
  }

  onChangeView(tabIdx: number) {
    const url = this.isUserSelf
      ? `/profile/${this.viewList[tabIdx]}`
      : `/profile/user/${this.userId}/${this.viewList[tabIdx]}`;
    this.router.navigateByUrl(url);
  }
}
