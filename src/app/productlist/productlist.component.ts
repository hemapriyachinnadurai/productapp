import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from './product/product';
import { AppComponent } from './../app.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss', './product/product-list.scss']
})
export class ProductlistComponent implements OnInit {
  @ViewChild(AddProductComponent) child;
  productList: Product[] = [];
  filterValue;
  filterValueItems;
  allList: any = [];
  productList1: any;
  image = 'assets/img/bake.svg'
  isShow: boolean = false;
  page: any;
  createAsEach: any;
  constructor(private http: HttpClient, private data: DataService) { }


  ngOnInit() {
    this.getProductList();
    this.addItem();
  }

  getProductList() {
    return this.http.get('assets/mock-json/productlist.json').subscribe((res: any[]) => {
      this.productList = res;
      this.allList = res;
    })
  }

  filtermethod(resfilterValues) {
    this.filterValueItems = resfilterValues.toLowerCase();
    if (this.filterValue === '') {
      this.productList = this.productList;
    } else {
      this.productList = [];
      this.allList.forEach(x => {
        if (x.product == this.filterValueItems) {
          this.productList.push(x)
        }
      }
      )
    }

  }

  showImage(){
    this.isShow = ! this.isShow;
  }

  handlePageChange(e){
    this.page = e;
    // console.log(e)
  }

  addItem(){
    this.data.subject.subscribe(res => {
      if(res){
        // console.log(res);
        this.addProductOneByOne(res)
      }
      
    })
  }

  addProductOneByOne(res){
    // this..push(res.value);
    // console.log(res.value);
    this.createAsEach = {
      "product": res.value["product"],
      "code": res.value["code"],
      "available": res.value["status"],
      "price": res.value["price"],
      "star_rating": res.value["rating"]
    }
    
    this.productList.unshift(this.createAsEach)
    console.log(this.productList);
  }
}