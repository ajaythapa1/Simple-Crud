// parent.component.ts
import { Component, OnInit } from '@angular/core';
import { FormComponent } from './Form/form/form.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormService } from './shared/form.service';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormComponent, HttpClientModule]

})
export class AppComponent implements OnInit {

  // constructor(private formservice: FormService) {
  // }
  ngOnInit(): void {
    // this.formservice.refreshList().subscribe({
    //   next: (res) => console.log(res),
    //   error: (err) => console.error(err)
    // });

  }
}
