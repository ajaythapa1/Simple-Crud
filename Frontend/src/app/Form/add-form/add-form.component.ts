import { Component } from '@angular/core';
import { FormService } from '../../shared/form.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Form } from '../../shared/form.model';

import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {

  constructor(public service: FormService) {
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.id == "")
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm) {
    this.service.postStudentForm()
      .subscribe({
        next: res => {
          this.service.list = res as Form[]
          this.service.resetForm(form)
          // this.toastr.success('Insert Successfully', 'Student')
        },
        error: err => {
          console.log(err);
        }
      })
  }
  updateRecord(form: NgForm) { 
    this.service.patchStudentForm()
    .subscribe({
      next: res => {
        this.service.list = res as Form[]
        this.service.resetForm(form)
      },
      error : err => {console.log(err);
      }
    })
  }
}

