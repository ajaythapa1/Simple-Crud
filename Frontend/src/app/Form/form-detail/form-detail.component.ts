import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form.service';
import { CommonModule } from '@angular/common';
import { Form } from '../../shared/form.model';



@Component({
  selector: 'app-form-detail',
  imports: [CommonModule],
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.css'
})
export class FormDetailComponent implements OnInit {

  constructor(public service: FormService) {
  }
  ngOnInit(): void {
    this.service.refreshlist();
  }

  populateForm(selectedRecord: Form) {
    this.service.formData = Object.assign({}, selectedRecord)
  }

  onDelete(id: string) {
    if (confirm('Are you sure??'))
      this.service.deleteStudent(id)
        .subscribe({
          next: res => {
            this.service.list = res as Form[]
          },
          error: err => {
            console.log(err);
          }
        })
  }
}
