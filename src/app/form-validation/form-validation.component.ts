import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppMaskPhoneDirective } from '../directives/mask-phone/app-mask-phone.directive';
import { AppMaskPostcodeDirective } from '../directives/mask-postcode/app-mask-postcode.directive';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, AppMaskPhoneDirective, AppMaskPostcodeDirective],
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
      age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(65)]),
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
}
