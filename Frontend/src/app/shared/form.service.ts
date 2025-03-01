import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Form } from './form.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url: string = environment.apiBaseUrl + '/Student'
  list: Form[] = []
  formData: Form = new Form()
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) { }
  refreshlist() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as Form[]
        },
        error: err => {
          console.log(err)
        }
      })
  }

  postStudentForm() {
    return this.http.post(this.url, this.formData)
  }

  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new Form()
    this.formSubmitted = false;
  }

  patchStudentForm(){
    return this.http.patch(this.url,this.formData)
  }

  deleteStudent(id : string){
    return this.http.delete(this.url+'/'+ id)
  }
}
