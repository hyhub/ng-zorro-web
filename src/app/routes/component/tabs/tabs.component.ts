import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

  @Input() pos = 0;

  @Input() tabs = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  to(item: any) {
    this.router.navigateByUrl(`${item}`);
  }
}
