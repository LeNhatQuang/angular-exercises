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
  favoriteColor = '';

  //reactive forms
  favoriteColorControl = new FormControl('');
}
