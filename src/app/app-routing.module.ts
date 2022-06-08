import { ProfileComponent } from './admin/profile/profile.component';
import { AgentItemComponent } from './agent/agent-item/agent-item.component';
import { AgentFormComponent } from './agent/agent-form/agent-form.component';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authenticat/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'navbar',
    component: NavbarComponent,
    children:
    [
      {path:"add-agent",component:AgentFormComponent},
      {path:"agents",component:AgentListComponent},
      {path:"agent",component:AgentItemComponent},
      {path:"profile",component:ProfileComponent}
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
