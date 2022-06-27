import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../model/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private baseUrl: string;
  constructor(private httpClient:HttpClient) {
          this.baseUrl="http://localhost:4040/Agent/"
   }

   public findAllAgents():Observable<Agent[]>
   {
    return this.httpClient.get<Agent[]>
    (this.baseUrl+'agents');
   }
   public findAgent(username: string): Observable<Agent[]> {
		return this.httpClient.get<Agent[]>(this.baseUrl + "agent/" + username);
	}

  public createAgent(agent:Agent)
  {
     return this.httpClient.post<Agent>(this.baseUrl+'addAgent',agent);
  }

  public deleteAgent(id:number):Observable<any>
  {
    return this.httpClient.delete(this.baseUrl+"delete/"+id) ;
  }

}
