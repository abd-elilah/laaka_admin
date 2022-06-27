import { AgentService } from './../service/agent.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Agent } from '../model/agent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.css']
})
export class AgentFormComponent implements OnInit {
  agent!: Agent;

  form: FormGroup = new FormGroup({
    prenom:new FormControl('',Validators.required),
    nom:new FormControl('',Validators.required),
    telephone:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email, Validators.required]),
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    cin:new FormControl('',Validators.required),
    agence:new FormControl('',Validators.required),

  });
  get prenom() {
    return this.form.get('prenom');
  }

  get nom() {
    return this.form.get('nom');
  }

  get cin() {
    return this.form.get('cin');
  }


  get telephone() {
    return this.form.get('telephone');
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
  get role() {
    return this.form.get('role');
  }
  get agence() {
    return this.form.get('agence');
  }



  constructor( private agentservice:AgentService ,
    private rout:Router) { }

  ngOnInit(): void {
  }

  save()
  {
    this.agent=this.form.value;
    this.agentservice.createAgent(this.agent)
    .subscribe(
      (res) => this.confirm()
    );
  }

  confirm()
  {
      this.rout.navigate(['agents']);
  }

}
