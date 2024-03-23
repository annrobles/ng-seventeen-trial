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
  result = "Valid";

  constructor(private fb: FormBuilder) { 
    this.formValidation = new FormGroup({
      description: new FormControl(null, Validators.required),      
    })    
  }

  onSubmit() {
    this.validateCode();
    console.warn(this.formValidation.value);
  }

  onClear() {
    this.formValidation.reset();
  }

	validateCode() {
    const chars: CharsMap = {
      "<": ">",
      "[": "]",
      "{": "}",
      "(": ")"
    };
    const counter: CounterMap = {
      "<": 0,
      "[": 0,
      "{": 0,
      "(": 0,
      ">": 0,
      "]": 0,
      "}": 0,
      ")": 0
    };
    const code = this.formValidation.get('description')?.value ?? "";
    let stack: string[] = [];

    for (let char of code) {
      const key = char as keyof CharsMap;
      if (chars[key]) {
        stack.push(char);
      } else if (Object.values(chars).includes(char)) {
        if (stack.length === 0 || chars[stack.pop() as keyof CharsMap] !== char) {
          this.result = "Invalid";
          return;
        }
      }
      if (counter[char] !== undefined) {
        counter[char]++;
      }
    }
		this.result = `Valid;\n<: ${counter["<"]}, >: ${counter[">"]}, [: ${counter["["]}, ]: ${counter["]"]}, {: ${counter["{"]}, }: ${counter["}"]}, (: ${counter["("]}, ): ${counter[")"]}`;
	};  
}

interface CharsMap {
  "<": string;
  "[": string;
  "{": string;
  "(": string;
}
interface CounterMap {
  [key: string]: number;
}

