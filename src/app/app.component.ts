import {
  Component,
  Input,
  SimpleChanges,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

let logIndex = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  title = 'lifecycle';
  name = 'Hello Lifecycle';

  logIt(msg: String) {
    console.log(`#${logIndex++} - ${msg}`);
  }

  constructor() {
    this.logIt('nameThe value of the property in constructor is: ' + this.name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.logIt('nameThe value of the property in ngOnChanges is: ' + this.name);
  }

  ngDoCheck() {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logIt('ngOnDestroy');
  }
}
