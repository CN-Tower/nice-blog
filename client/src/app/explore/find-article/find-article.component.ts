import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../explore.service';

@Component({
  selector: 'app-find-article',
  templateUrl: './find-article.component.html',
  styleUrls: ['./find-article.component.less']
})
export class FindArticleComponent implements OnInit {
  data = new Array(7).fill({}).map((i, index) => {
    return {
      href: 'http://ant.design',
      title: `ant design part ${index}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources.'
    };
  });

  constructor(public exploreService: ExploreService) { }

  ngOnInit() {
  }

}
