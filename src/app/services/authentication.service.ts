import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private loggedIn = false;

  constructor() { }


   // username:any;
  // password:any;

  userName =new Subject();
 

  // login(username: string, password: string): boolean {
  //   if (username === 'user' && password === 'password') {
  //     this.loggedIn = true;
  //     return true;
  //   }
  //   return false;
  // }

  // logout(): void {
  //   this.loggedIn = false;
  // }

  // isLoggedIn(): boolean {
  //   return this.loggedIn;
  // }
}

