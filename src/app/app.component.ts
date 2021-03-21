import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-exercises';
  //template-driven forms
  onSubmit(value: any) {
    console.log(value);
  }


  //reactive forms
  favoriteColorControl = new FormControl('');
}
