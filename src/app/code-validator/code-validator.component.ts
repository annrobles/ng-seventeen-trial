import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-code-validator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './code-validator.component.html',
  styleUrl: './code-validator.component.less'
})
export class CodeValidatorComponent {
  formValidation: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.formValidation = new FormGroup({
      description: new FormControl(null, Validators.required),      
    })    
  }

  onSubmit() {
    console.warn(this.formValidation.value);
  }

  onClear() {
    this.formValidation.reset();
  }
}
