import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  form = this.fb.group({
    email: ['flavio@example.com'],
    password: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.form.value.email);
  }
}
