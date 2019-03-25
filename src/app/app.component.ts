import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathJaxSample';
  data1 = '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$';
  data2 = `$$
  A = \\left(
    \\begin{array}{cc}
  1 & 2 \\\\
  3 & 5
  \\end{array}
  \\right).
  $$`;
}
