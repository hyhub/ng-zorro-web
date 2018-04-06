import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './list.component.html'
})
export class OrderListComponent implements OnInit {
  pos = 0;

  tabs = [
    {
      url: 'order/list',
      name: '订单列表',
    },
    {
      url: 'order/historyList',
      name: '历史订单列表',
    }
  ];

  searchOptions = [{
    value: '订单编号'
  }, {
    value: '用户id'
  }, {
    value: '用户姓名'
  }, {
    value: '商品名称'
  }];

  ths = [{
    lable: ''
  }, {
    lable: '订单编号'
  }, {
    lable: '用户id'
  }, {
    lable: '用户姓名'
  }, {
    lable: '订单类型'
  }, {
    lable: '供应商名称'
  }, {
    lable: '商品id'
  }, {
    lable: '商品名称'
  }, {
    lable: '商品数量'
  }, {
    lable: '单价'
  }, {
    lable: '总价'
  }, {
    lable: '规格'
  }, {
    lable: '下单时间'
  }];
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

  ngOnInit() {
  }

}
