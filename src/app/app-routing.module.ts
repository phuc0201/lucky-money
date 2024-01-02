import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LuckyMoneyComponent } from './lucky-money/lucky-money.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: ''
  },
  {
    path: 'lucky-money',
    component: LuckyMoneyComponent,
    title: 'Nhận lì xì'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
