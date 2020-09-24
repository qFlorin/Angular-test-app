import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  personalForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    street: [''],
    number: [''],
    male: [''],
    female: ['']

  });
  ngOnInit(): void {
  }

}
