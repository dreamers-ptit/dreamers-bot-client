import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeHistoryComponent } from './trade/trade-history/trade-history.component';
import { TradingComponent } from './trade/trading/trading.component';
import { HoldingComponent } from './trade/holding/holding.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'trading', component: TradingComponent },
    { path: 'holding', component: HoldingComponent },
    { path: 'trade-history', component: TradeHistoryComponent },
    { path: 'settings', component: SettingsComponent },

    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}