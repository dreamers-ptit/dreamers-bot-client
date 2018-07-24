import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeHistoryComponent } from './trade/trade-history/trade-history.component';
import { TradingComponent } from './trade/trading/trading.component';
import { HoldingComponent } from './trade/holding/holding.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftSidebarComponent,
    ControlSidebarComponent,
    FooterComponent,

    HomeComponent,
    DashboardComponent,
    TradingComponent,
    HoldingComponent,
    TradeHistoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
