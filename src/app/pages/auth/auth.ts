import { Component } from '@angular/core';
import { AuthHeader } from './components/auth-header/auth-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet,AuthHeader],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {

}
