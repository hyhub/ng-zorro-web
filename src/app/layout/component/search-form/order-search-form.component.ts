import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-search-form',
  templateUrl: './order-search-form.component.html'
})
export class OrderSearchFormComponent implements OnInit {

  _searchType;
  _searchText;
  _supplier;
  expandForm = true;
  _orderDate: Date = null;
  _orderType;
  orderTypes = [{
    value: '烟草'
  }, {
    value: '非烟'
  }];

  @Input() searchOptions: any = [];

  constructor() {
  }

  ngOnInit() {
  }

  _reset() {
    this._searchType = null;
    this._searchText = null;
    this._supplier = null;
    this._orderType = null;
    this._orderDate = null;
  }
}
