import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-credit-search-form',
  templateUrl: './credit-search-form.component.html'
})
export class CreditSearchFormComponent implements OnInit {

  expandForm = true;

  searchOptions = [{
    value: '贷款编号'
  }, {
    value: '订单编号'
  }, {
    value: '用户id'
  }, {
    value: '烟草证号'
  }, {
    value: '用户姓名'
  }];
  _searchType;
  _searchValue;
  _billExpireDate = null;
  _creditExpireDate = null;
  _auditDate = null;
  _applyDate = null;
  _credit = null;

  isCredit = [{
    label: '是',
    value: '1'
  }, {
    label: '否',
    value: '0'
  }];

  _orderType;
  _supplier;
  orderType = [{
    label: '烟草',
    value: 'tobacco'
  }, {
    label: '非烟',
    value: 'nonSmoke'
  }];

  constructor() {
  }

  ngOnInit() {
  }

  _search() {
  }

  _reset() {
    this._searchType = null;
    this._searchValue = null;
    this._billExpireDate = null;
    this._creditExpireDate = null;
    this._auditDate = null;
    this._applyDate = null;
    this._orderType = null;
    this._credit = null;
    this._supplier = null;
  }
}
