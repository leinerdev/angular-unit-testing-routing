import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';

export class ActivatedRouteStub {
  private subject = new ReplaySubject<ParamMap>();
  private subjectQuery = new ReplaySubject<ParamMap>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  readonly paramMap = this.subject.asObservable();
  readonly queryParamMap = this.subjectQuery.asObservable();

  setParamMap(params: Params = {}) {
    this.subject.next(convertToParamMap(params));
  }

  setQueryParamMap(params: Params = {}) {
    this.subjectQuery.next(convertToParamMap(params));
  }
}
