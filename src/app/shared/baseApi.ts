import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export abstract class BaseApi<T> {
  private baseUrl = 'http://mba_jralison.com:8081/api';

  constructor(private httpClient: HttpClient, private path: string) {
  }

  listar(): Observable<T> {
    return this.httpClient
      .get('${this.baseUrl}/${this.path}')
      .pipe(map(value => value as T));
  }

  consultar(id: number | string, body: T): Observable<T> {
    return this.httpClient
      .put('${this.baseUrl}/${this.path}/${id}')
      .pipe(map(value => value as T));

  }
}
