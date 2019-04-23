import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  //add category
  addCategory(catetoryname) {
    const obj = {
      name: catetoryname
    };
    console.log(obj);

    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache','x-access-token': localStorage.getItem('x-access-token') }),
      
  };
  this.http.post(this.uri + '/category', obj,headers).subscribe(
    (res: any) => {
        console.log(res);
    })
  }
  //list category

  getCategory() {
  return this.http.get(this.uri + '/category');
}
}
