import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private apiservice: ApiService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      catetoryname: ['', Validators.required ]
    });
  }

  addCategory() {
    const val = this.form.value;
    this.apiservice.addCategory(val.catetoryname);
  }

 
  ngOnInit() {
  }

}
