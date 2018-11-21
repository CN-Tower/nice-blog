import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
  registerModel: Subject<any> = new Subject();
  registerModel$: any = this.registerModel.asObservable();
  constructor() { }
}
