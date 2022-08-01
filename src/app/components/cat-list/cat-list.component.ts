import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: ManagmentServiceService) { }

  ngOnInit(): void {
    this.listOfCategories();
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe(
      data =>{
        console.log(data);
        this.categories=data
      }
    )
  }

}
