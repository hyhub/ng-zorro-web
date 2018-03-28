import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {

  private menus: Menu[] = [
    new Menu(1, '菜单一', 1, ''),
    new Menu(2, '菜单二', 2, ''),
    new Menu(3, '菜单三', 3, ''),
    new Menu(4, '菜单四', 4, ''),
    new Menu(5, '菜单五', 5, ''),
    new Menu(6, '菜单流', 6, '')
  ];

  private HOST: String = 'http://localhost';

  constructor() {
  }

  loadMenus(): Menu[] {
    return this.menus; // 通过http请求后台获取
  }

}

export class Menu {
  constructor(public id: number,
              public title: string,
              public order: number,
              public uri: string) {
  }

}
