import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MathJax Angular Demo';

  constructor() {}

  // tslint:disable-next-line:quotemark
  data = "test data \\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)";

}
