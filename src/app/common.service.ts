import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {

  public imageSubject: Subject<any> = new Subject();

  constructor() { }

}
