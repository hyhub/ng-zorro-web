import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-search-form',
  templateUrl: './search-form.component.html'
})
export class OrderSearchFormComponent implements OnInit {

  orderDate: Date = null;

  orderType = [{
    value: '烟草'
  }, {
    value: '非烟'
  }];

  @Input() searchOptions: any = [];

  constructor() {
  }

  ngOnInit() {
  }

}
