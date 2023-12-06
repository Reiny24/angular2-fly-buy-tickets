import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true;
  login: string = '';
  password: string = '';
  showPassword: boolean = false;
  firstname: string = '';
  lastname: string = '';
  mobile: string = '';

  handlePasswordChange(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }

  handleFirstNameChange(event: Event): void {
    this.firstname = (event.target as HTMLInputElement).value;
  }

  handleLastNameChange(event: Event): void {
    this.lastname = (event.target as HTMLInputElement).value;
  }

  handlePhoneNumberChange(event: Event): void {
    this.mobile = (event.target as HTMLInputElement).value;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleForm(): void {
    this.isLogin = !this.isLogin;
    this.password = '';
    this.firstname = '';
    this.lastname = '';
    this.mobile = '';
  }
}
