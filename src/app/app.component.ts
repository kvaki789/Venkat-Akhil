import { Component } from '@angular/core';
import { Product } from './viewmodules/product.viewmodule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // id:number=1;
  // name:string="oneplu6";
  // cost:number=34999;
  // category:string="Electronics";

  // pro:Product={
  //   id:1,
  //   name:"oneplus6",
  //   cost:38999,
  //   category:"Electronics"
  // }


  products:Product[]=[
    {
      id:1,
      name:"oneplus6t",
      cost:40000,
      category:"Electronics"
    },
    {
      id:2,
      name:"Note8",
      cost:80000,
      category:"Electronics"
    },
    {
      id:3,
      name:"Sparx casual",
      cost:40000,
      category:"Fashion"
    }
    
  ]
}
