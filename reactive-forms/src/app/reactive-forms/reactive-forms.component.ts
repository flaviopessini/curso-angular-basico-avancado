import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  cadastroForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {
    //
  }

  submitForm(): void {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
      console.log(this.cadastroForm.value.email);
    }
  }
}
