import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'Login';
  userName = '';
  password = '';
  constructor() {
    this.userName = '';
    this.password = '';
  }

  login() {
    alert(`${this.userName} user has successfully logged in!`);
  }
}
