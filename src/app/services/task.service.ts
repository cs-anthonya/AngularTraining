import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }


  getall() {
    return this.http.get(environment.apiUrl + '/v1/getall');
  }

  add(payload: any){
    return this.http.post(environment.apiUrl + '/v1/create', payload);
  }

  changeStatus(id:number, status:string) {
    return this.http.put(environment.apiUrl + '/v1/changeStatus/' + id + '/' + status , {});
  }

  delete(id:number) {
    return this.http.delete(environment.apiUrl + '/v1/delete/' + id);
  }


  get(id:number) {
    return this.http.get(environment.apiUrl + '/v1/get/' + id);
  }

  update(payload: any, id:number){
    return this.http.post(environment.apiUrl + '/v1/update/' + id, payload);
  }

}
