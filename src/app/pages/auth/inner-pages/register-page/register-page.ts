import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../service/auth/auth-service';
import { RegisterRequestDto } from '../../../../dto/registerRequestDto';

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password        = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password && confirmPassword && password !== confirmPassword
    ? { passwordMismatch: true }
    : null;
}

@Component({
  selector: 'app-register-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})

export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  hidePassword        = true;
  hideConfirmPassword = true;
  isLoading           = false;
 
  private authService = inject(AuthService);
  private router      = inject(Router);
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName:       ['', [Validators.required, Validators.minLength(2)]],
        lastName:        ['', [Validators.required, Validators.minLength(2)]],
        email:           ['', [Validators.required, Validators.email]],
        phone:           ['', [Validators.pattern(/^(?:\+94|0)[0-9]{9}$/)]],
        password:        ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        agreeTerms:      [false, [Validators.requiredTrue]],
      },
      { validators: passwordMatchValidator }
    );
  }
 
  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
 
  toggleConfirmPassword(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
 
  onRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
 
    this.isLoading = true;
    const { firstName, lastName, email, phoneNumber, password } = this.registerForm.value;
 
    const user: RegisterRequestDto = {
      fullName: `${firstName} ${lastName}`,
      email : email,
      phoneNumber: phoneNumber,
      password : password,
    };
 
    this.authService.register(user).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/auth/login');
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      }
    });

    /*setTimeout(() => {
      this.isLoading = false;
    }, 1500);*/
  }

  // ─── Error helpers ─────────────────────────────────────────────
  getFirstNameError(): string {
    const c = this.registerForm.get('firstName');
    if (c?.hasError('required'))  return 'First name is required';
    if (c?.hasError('minlength')) return 'Must be at least 2 characters';
    return '';
  }
 
  getLastNameError(): string {
    const c = this.registerForm.get('lastName');
    if (c?.hasError('required'))  return 'Last name is required';
    if (c?.hasError('minlength')) return 'Must be at least 2 characters';
    return '';
  }
 
  getEmailError(): string {
    const c = this.registerForm.get('email');
    if (c?.hasError('required')) return 'Email is required';
    if (c?.hasError('email'))    return 'Enter a valid email address';
    return '';
  }
 
  getPhoneError(): string {
    const c = this.registerForm.get('phone');
    if (c?.hasError('required')) return 'Phone number is required';
    if (c?.hasError('pattern'))  return 'Enter a valid Sri Lankan number (e.g. 077 123 4567)';
    return '';
  }
 
  getPasswordError(): string {
    const c = this.registerForm.get('password');
    if (c?.hasError('required'))  return 'Password is required';
    if (c?.hasError('minlength')) return 'Password must be at least 8 characters';
    return '';
  }
 
  getConfirmPasswordError(): string {
    const c = this.registerForm.get('confirmPassword');
    if (c?.hasError('required')) return 'Please confirm your password';
    if (this.registerForm.hasError('passwordMismatch') && c?.touched) return 'Passwords do not match';
    return '';
  }
}
