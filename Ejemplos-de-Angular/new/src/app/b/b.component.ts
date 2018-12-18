import { Component, OnInit } from '@angular/core';
import { pedidos } from '../models/pedidos';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedido: pedidos[]=null;
  constructor() { }

  ngOnInit() {
    this.pedido=[ new pedidos(1,'barato barato',525),new pedidos(2,'mas caro',5125)]
    
  }

}

