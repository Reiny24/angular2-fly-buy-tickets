import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class LoginComponent {
  log: any = {};

  login() {
    // Логіка для авторизації
  }

  togglePassword() {
    // Логіка для показу/приховання пароля
  }
}
