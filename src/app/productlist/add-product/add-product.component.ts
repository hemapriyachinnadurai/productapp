import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { ActivatedRoute, Route, Routes } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productListSingle: any;
  @Output() productListAdd = new EventEmitter();
  submitted = false;
  // private subject: BehaviorSubject<any> = new BehaviorSubject([]) ;
  constructor(private fb: FormBuilder, private data: DataService, private route: Router) { }
  productListForm = this.fb.group({
    product: ["", Validators.required],
    code: ["", Validators.required],
    status: ["", Validators.required],
    price: ["", Validators.required],
    rating: ["", Validators.required]
  })
 
  ngOnInit() {
  }
  get f(){
return this.productListForm.controls;
  }

  submit(){
    this.submitted = true;
    if (this.productListForm.invalid) {
      return;
    }

    this.productListSingle = this.productListForm;
    this.data.subject.next(this.productListForm);
    // console.log(this.productListForm);
    this.route.navigate(["/"])
  }
}
