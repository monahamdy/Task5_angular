import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  username:any;
  constructor(private authservice:AuthenticationService) {
  }
  ngOnInit(): void {

    this.authservice.userName.subscribe((response)=>
    {
      this.username=response;
    })
  }

}
