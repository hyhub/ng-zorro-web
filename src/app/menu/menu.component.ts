import {Component, OnInit} from '@angular/core';
import {Menu, MenuService} from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus: Array<Menu>;

  constructor(private menService: MenuService) {
  }

  ngOnInit() {
    // this.menus = this.menService.loadMenus();//如果需要加权限或者动态菜单
  }
}
