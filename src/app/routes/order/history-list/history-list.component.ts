import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-history-list',
  templateUrl: './history-list.component.html'
})
export class OrderHistoryListComponent implements OnInit {
  pos = 1;
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
    value: '烟草证号'
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
    lable: '烟草证号'
  }, {
    lable: '供应商名称'
  }, {
    lable: '销售额'
  }, {
    lable: '数量'
  }, {
    lable: '下单时间'
  }];

  data = [
    {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }, {
      orderNo: '23424',
      userId: '23424',
      userName: '张三',
      tobaccoLicenseNO: '1',
      suppyName: '23424',
      salesAmount: '111',
      produceName: '汇源果汁',
      amount: 1,
      createTime: '2016-08-01 19:00:00'
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
