import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.less']
})
export class MyCollectionComponent implements OnInit {
  data = new Array(7).fill({}).map((i, index) => {
    return {
      href: 'http://ant.design',
      title: `ant design part ${index}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources.'
    };
  });

  constructor(public articleService: ArticleService) { }

  ngOnInit() {}

}
