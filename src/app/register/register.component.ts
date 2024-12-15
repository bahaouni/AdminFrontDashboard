import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    ReactiveFormsModule
  ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    // Initialize the form with validators
    this.registerForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {}

  // Custom validator for password match
  private passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('repeatPassword')?.value
      ? null
      : { mismatch: true };
  }

  signUp() {
    if (this.registerForm.valid) {
      const user = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        fullName: this.registerForm.value.fullName,
        role: 'USER',
      };

      /*this.authService.SignUp(user).subscribe(
        (response) => {
          this.toast.success('User Signed-up successfully', 'Success');
          this.router.navigate(['/']);
        },
        (error) => {
        }
      );*/
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegisterConductor() {
    this.router.navigate(['/register-conductor']);
  }
}
