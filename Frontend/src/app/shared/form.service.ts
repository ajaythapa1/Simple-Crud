import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url: string = environment.apiBaseUrl + '/Student'

  constructor(private http: HttpClient) { }
  refreshlist() {
    this.http.get(this.url)
    .subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {console.log(err)
      }
    })
  }
}
