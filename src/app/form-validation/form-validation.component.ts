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
      email: new FormControl(null, [Validators.required, Validators.email]),
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

  onClear() {
    this.formValidation.reset();
    this.formValidation.patchValue({
      color: 'White'
    })
  }

  maskPhone(event: any) {
    const cleaned = event.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    this.formValidation.patchValue({
      phone: `(${match[1]}) ${match[2]}-${match[3]}`
    })
  }
}
