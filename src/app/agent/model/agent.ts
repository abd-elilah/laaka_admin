export class Agent {

  public password!: string;


  constructor(  public id: number,
    public firstname: string,
    public lastname: string,
    public username: string,
    public email: string,
    public phone: string,
    public role: string)
  {

  }
}
