import {Component, OnInit} from '@angular/core';
import {Bb, Item, ItemService} from './item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public items: Array<Item>;

  public bbs: Array<Bb>;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.bbs = this.itemService.getBbs();
  }

}
