import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  options = [];
  selectedOption;
  loading = false;
  index = 0;
  pos = 0;
  tabs = [
    {
      key: 'orderList',
      name: '订单列表',
    },
    {
      key: 'historyOrderList',
      name: '历史订单列表',
    }
  ];

  data = [
    {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.01,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      orderType: '1',
      suppyName: '23424',
      produceId: '111',
      produceName: '汇源果汁',
      amount: 1,
      price: 1.00,
      totalAmount: 10.00,
      rank: '1L/盒',
      createTime: '2016-08-01 19:00:00'
    }
  ];

  constructor(private router: Router) {
  }

  scrollToBottom() {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        // this.generateFakeData();
        this.loading = false;
      }, 3000);
    }
  }

  // generateFakeData() {
  //   for (let i = 0; i < 5; i++) {
  //     this.options.push({value: this.index, label: `option${this.index}`});
  //     this.index++;
  //   }
  // }

  ngOnInit() {
    // this.generateFakeData();
    this.selectedOption = this.options[0];
  }


  to(item: any) {
    this.router.navigateByUrl(`menu/credit-passed`);
  }
}
