import { Component } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  auth!: AuthService

  constructor(
    private authService: AuthService
    
  ) { 
    this.auth = authService
  }

  onLogOut() {
    this.authService.logoutUser()
  }
}
