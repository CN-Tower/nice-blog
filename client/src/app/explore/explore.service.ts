import { Injectable } from '@angular/core';

@Injectable()
export class ExploreService {
  toggleFilter: { isShow: Boolean } = { isShow: true };
  constructor() { }
}
