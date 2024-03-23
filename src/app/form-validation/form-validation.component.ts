import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.less'
})
export class FormValidationComponent {
  formValidation: FormGroup;
  colors = ['White', 'Black', 'Orange', 'Blue', 'Red'];

  constructor(private fb: FormBuilder) { 
    this.formValidation = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      color: new FormControl('White'),
      condition: new FormControl(null, Validators.required),
    })    
  }

  onSubmit() {
    console.warn(this.formValidation.value);
  }  
}
