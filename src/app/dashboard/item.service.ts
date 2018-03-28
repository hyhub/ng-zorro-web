import {Injectable} from '@angular/core';

@Injectable()
export class ItemService {

  private items: Item[] = [
    new Item('今日头寸', 11111.99, 3.5),
    new Item('贷款总金额', 2222222.99, 0.5),
    new Item('资产余额', 333333.99, 1.5),
    new Item('总收入', 4444444.99, 2.5),
  ];

  private bbs: Bb[] = [
    new Bb(43583746.13, '30天内到期贷款'),
    new Bb(39247.12, '逾期未结清金额'),
    new Bb(3, '预警用户'),
    new Bb(0, '逾期用户'),
  ];

  constructor() {
  }

  getItems(): Item[] {
    return this.items;
  }

  getBbs(): Bb[] {
    return this.bbs;
  }

}

export class Item {
  constructor(public title: string,
              public money: number,
              public yestoday: number) {
  }
}

export class Bb {
  constructor(public money: number,
              public title: string) {

  }
}
