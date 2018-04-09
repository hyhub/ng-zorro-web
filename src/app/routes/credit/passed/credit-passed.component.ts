import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-credit-passed',
  templateUrl: './credit-passed.component.html'
})
export class CreditPassedComponent implements OnInit {

  pos;
  index = 0;

  tabs = [
    {
      url: 'credit/audit',
      name: '待审核',
    },
    {
      url: 'credit/passed',
      name: '已通过',
    },
    {
      url: 'credit/refused',
      name: '已拒绝',
    },
    {
      url: 'credit/all',
      name: '全部',
    }
  ];

  ths = [{
    lable: '贷款编号'
  }, {
    lable: '订单编号'
  }, {
    lable: '用户id'
  }, {
    lable: '用户姓名'
  }, {
    lable: '烟草证号'
  }, {
    lable: '可用授信额度'
  }, {
    lable: '申请时间'
  }, {
    lable: '贷款金额'
  }, {
    lable: '贷款日利率'
  }, {
    lable: '贷款到期日'
  }, {
    lable: '是否有账期'
  }, {
    lable: '账期到期日'
  }, {
    lable: '提现手续费'
  }, {
    lable: '流量担保费'
  }, {
    lable: '供应商公司名称'
  }, {
    lable: '订单类型'
  }, {
    lable: '审核状态'
  }, {
    lable: '审核时间'
  }, {
    lable: '审核人'
  }, {
    lable: ''
  }];

  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _dataSet = [];
  _indeterminate = false;

  _orderRules = [{
    label: '默认', value: '1'
  }, {
    label: '申请时间', value: '2'
  }, {
    label: '贷款金额', value: '3'
  }, {
    label: '贷款到期日', value: '4'
  }, {
    label: '账期到期日', value: '5'
  }, {
    label: '提现手续费', value: '6'
  }, {
    label: '流量担保费', value: '7'
  }, {
    label: '审核时间', value: '8'
  }];

  _allCheckedNumber = 0;
  _allCheckText = '勾选全部记录';
  _allCheckedAmount = 0;

  _orderRule = this._orderRules[0];

  _radioValue = 'desc';

  _displayDataChange($event) {
    this._displayData = $event;
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }

  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  }

  _checkAllOperation() {
    if (this._allCheckText === '勾选全部记录') {
      this._allCheckText = '取消勾选全部';
      this._allCheckedNumber = 100;
      this._allCheckedAmount = 100;
    } else {
      this._allCheckText = '勾选全部记录';
      this._allCheckedNumber = 0;
      this._allCheckedAmount = 0;
    }
  }

  _export() {

  }

  _pass() {
    this._message.info('请勾选待审核记录', {nzDuration: 10000});
  }

  _refuse() {
    this.showModal();
  }

  showModal() {
    const modal = this.modalService.open({
      title: '通过确认',
      content: `本次审核共 ${this._allCheckedNumber} 笔，12234 元`,
      closable: false,
      showConfirmLoading: true,
      onOk: () => {
        this._pass();
      },
      onCancel() {
      }
    });
  }

  constructor(private _message: NzMessageService, private modalService: NzModalService, private http: HttpClient) {
    // this.http.get('/a/b').subscribe((res: any[]) => {
    //   this.data = res;
    //   this.smallData = res.slice(0, 6);
    // });
  }

  ngOnInit() {

    this.pos = 1;

    this._orderRule = this._orderRules[0];

    for (let i = 0; i < 46; i++) {
      this._dataSet.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }

  }

}
