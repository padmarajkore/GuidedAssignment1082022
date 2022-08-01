import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  formModel: Product = new Product(0,"","","",0,"",0,new Date(),new Date(),0)
  constructor(private service : ManagmentServiceService, private route : Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.service.saveProduct(this.formModel).subscribe(()=>{
    this.route.navigateByUrl("/products")
  });
}
}
