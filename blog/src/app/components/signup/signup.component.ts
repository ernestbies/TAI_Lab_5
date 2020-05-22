import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);
  }


}
