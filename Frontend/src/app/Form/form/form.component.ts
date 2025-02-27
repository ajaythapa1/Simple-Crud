import { Component } from '@angular/core';
import { AddFormComponent } from "../add-form/add-form.component";
import { FormDetailComponent } from "../form-detail/form-detail.component";

@Component({
  selector: 'app-form',
  imports: [AddFormComponent, FormDetailComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
