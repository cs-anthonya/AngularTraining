import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }
  
  form = new FormGroup({
    'email' : new FormControl('', Validators.email),
    'password' : new FormControl(''),
  })

  ngOnInit(): void {
    console.log(this.form)
  }

  login(){
    if (!this.form.valid)
      return;
    const value = this.form.value;
    this._authService.login(value)
    .subscribe((response: any) => {
        if (response.access_token) {
          this._authService.setToken(response.access_token);
          this._router.navigateByUrl('/task');
        }
    },
    (errorResponse:any) => {
      alert('Incorrect password or email');
    })
  }

}
