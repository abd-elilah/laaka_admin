import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentItemComponent } from './agent-item/agent-item.component';
import { AgentFormComponent } from './agent-form/agent-form.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';


@NgModule({
  declarations: [ AgentFormComponent,
                  AgentItemComponent,
                 AgentListComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule
  ]
})
export class AgentModule { }
