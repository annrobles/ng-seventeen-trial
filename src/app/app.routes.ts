import { Routes } from '@angular/router';
import { CodeValidatorComponent } from './code-validator/code-validator.component';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TodoComponent} from './todo/todo.component';

export const routes: Routes = [
    {
        path: '',
        component: CryptoCurrencyComponent,
        data: {
            title: 'Crypto Currency'
        }
    },
    {
        path: 'todo',
        component: TodoComponent,
        data: {
            title: 'To Do List'
        }
    },
    {
        path: 'code-validator',
        component: CodeValidatorComponent,
        data: {
            title: 'Code Validator'
        }
    },
    {
        path: 'form-validation',
        component: FormValidationComponent,
        data: {
            title: 'Form Validation'
        }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
