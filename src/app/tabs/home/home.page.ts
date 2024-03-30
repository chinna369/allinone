import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[] = [];
  constructor() { }

  ngOnInit() {
    this.products = [
      {image: '../../../assets/images/fig3.jpg'},
      {image: '../../../assets/images/fig1.jpg'},
      {image: '../../../assets/images/fig2.jpg'},
      {image: '../../../assets/images/fig4.jpg'},
    ]
  }

}
