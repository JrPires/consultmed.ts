import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medico} from '../../model/medico';
import {BaseApi} from '../../shared/baseApi';

@Injectable({
  providedIn: 'root'
})
export class MedicosService extends BaseApi<Medico> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'medicos');
  }

}
