import { Component, OnInit } from '@angular/core';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  products: Product[]
  constructor(private service : ManagmentServiceService) { }

  ngOnInit(): void {
    this.listOfProducts();
  }
  listOfProducts(){
    this.service.getAllProducts().subscribe(
      data => {
        console.log(data);
        this.products=data
  
      }
    )
  }


}

