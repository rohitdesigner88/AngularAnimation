import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: [`
  .nav-link {color: #b16742;}
  .nav-link.active{color: #e49369;}

  .navbar-brand{color: #fff;}

  `]
})
export class AppComponent {
  title = 'Angular Animation';
}
