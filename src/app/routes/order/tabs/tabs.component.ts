import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

  @Input() pos = 0;
  tabs = [
    {
      key: '/list',
      name: '订单列表',
    },
    {
      key: '/historyList',
      name: '历史订单列表',
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) {
      this.pos = idx;
    }
  }

}
