import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-starComponent',
  templateUrl: './starComponent.component.html',
  styleUrls: ['./starComponent.component.scss']
})
export class StarComponentComponent implements OnInit, OnChanges {
  rating: number = 4;
  cropWidth: number = 75;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.cropWidth = this.rating * 75/5;
  }
}
