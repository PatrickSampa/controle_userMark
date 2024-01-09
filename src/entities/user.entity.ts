/* eslint-disable prettier/prettier */
export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  constructor(email: string, password: string, name: string, id?: string){
    this.email = email
    this.password = password
    this.name = name
    this.id = id
  }
}
