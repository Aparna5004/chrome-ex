import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CyviewComponent } from './cyview/cyview.component';
import { FilterpageComponent } from './filterpage/filterpage.component';
import { HelppageComponent } from './helppage/helppage.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [{ path: "dashboard", component: DashboardComponent }, { path: "sidenav", component: SidenavComponent }, { path: "cyview", component: CyviewComponent }, { path: "filterpage", component: FilterpageComponent }, { path: "helppage", component: HelppageComponent }, { path: "account-setting", component: AccountSettingComponent }, { path: "login", component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
