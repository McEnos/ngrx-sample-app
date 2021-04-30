import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
addPepperoni,
addSausage,
hasSausage,
hasPepperoni,
removePepperoni,
removeSausage,
selectPizzaPrice,
selectPizzaImage
} from '../pizza.store' //imports actions and selectors 

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  img$  = this.store.select(selectPizzaImage);
  price$ = this.store.select(selectPizzaPrice);
  hasPepperoni$ = this.store.select(hasPepperoni)
  hasSausage$ = this.store.select(hasSausage);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  pepperoniClick(hasPepperoni: boolean){
    this.store.dispatch(hasPepperoni ? removePepperoni() : addPepperoni());
  }

  sausageClick(hasSausage: boolean){
    this.store.dispatch(hasSausage ? removeSausage() : addSausage())
  }
}
