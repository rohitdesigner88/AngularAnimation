import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BasicComponent } from './components/basic/basic.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { ContainedComponent } from './components/contained/contained.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CommonModule } from '@angular/common';
const animationRoutes:Routes = [
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full'
  },
  {
    path: 'animation-home',
    component: HomeComponent
  },
  {
    path: 'animation-basics',
    component: BasicComponent
  },
  {
    path: 'animation-contained',
    component: ContainedComponent
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }

 
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(animationRoutes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
