import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NZ_LOCALE, zhCN, NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {MenuComponent} from './layout/menu/menu.component';
import {FooterComponent} from './layout/footer/footer.component';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import {MenuService} from './layout/menu/menu.service';
import {ItemService} from './routes/dashboard/item.service';
import {OrderComponent} from './routes/order/order.component';
import {CreditPassedComponent} from './routes/credit-passed/credit-passed.component';

const routeConfig: Routes = [
  // {path: '',  component: DashboardComponent},
  {path: '', redirectTo: 'menu/order', pathMatch: 'full'},
  {path: 'menu/order', component: OrderComponent},
  {path: 'menu/credit-passed', component: CreditPassedComponent},
  {path: 'menu/credit-audit', component: MenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    OrderComponent,
    CreditPassedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig),
    NgZorroAntdModule.forRoot({extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont'})
  ],
  providers: [{provide: NZ_LOCALE, useValue: zhCN}, MenuService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
