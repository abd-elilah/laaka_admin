import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Agent } from '../model/agent';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit ,AfterViewInit {
  // table of agents
  agents: Agent[] = [
    new Agent(1,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(2,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(3,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(4,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(5,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),
    new Agent(6,'abdell','boudribila','abdell','zekdbejh@jkbeze','0643138764','agent'),


  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email','phone', 'role','Actions'];
  dataSource = new MatTableDataSource<Agent>(this.agents);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  goToagentDetails()
  {
      this.router.navigate(['navbar/agent']);
  }

}
