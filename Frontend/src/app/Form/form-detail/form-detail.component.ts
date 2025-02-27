import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form.service';


@Component({
  selector: 'app-form-detail',
  imports: [],
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.css'
})
export class FormDetailComponent implements OnInit {

 constructor(public service: FormService) {
  
 }
  ngOnInit(): void {
    this.service.refreshlist();
  }
}
