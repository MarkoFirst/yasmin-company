import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BigBlockComponent} from '../components/big-block/big-block.component';
import {LandingComponent} from '../components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/about_us',
    pathMatch: 'full'
  },
  {
    path: 'home/:name',
    component: BigBlockComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
