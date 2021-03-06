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
import {CreditPassedComponent} from './routes/credit/passed/credit-passed.component';
import {OrderListComponent} from './routes/order/list/list.component';
import {OrderHistoryListComponent} from './routes/order/history-list/history-list.component';
import {TabsComponent} from './layout/component/tabs/tabs.component';
import {OrderSearchFormComponent} from './layout/component/search-form/order-search-form.component';
import {CreditAuditComponent} from './routes/credit/audit/credit-audit.component';
import {CreditSearchFormComponent} from './layout/component/search-form/credit-search-form.component';
import {CreditRefuseComponent} from './routes/credit/refuse/credit-refuse.component';
import {CreditAllComponent} from './routes/credit/all/credit-all.component';

const routeConfig: Routes = [
  // {path: '',  component: DashboardComponent},
  {path: '', redirectTo: 'order/list', pathMatch: 'full'},
  {path: 'order/list', component: OrderListComponent},
  {path: 'order/historyList', component: OrderHistoryListComponent},
  {path: 'credit/passed', component: CreditPassedComponent},
  {path: 'credit/audit', component: CreditAuditComponent},
  {path: 'credit/refused', component: CreditRefuseComponent},
  {path: 'credit/all', component: CreditAllComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    CreditPassedComponent,
    OrderListComponent,
    OrderHistoryListComponent,
    TabsComponent,
    OrderSearchFormComponent,
    CreditAuditComponent,
    CreditSearchFormComponent,
    CreditRefuseComponent,
    CreditAllComponent
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
