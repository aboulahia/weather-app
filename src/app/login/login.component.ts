import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from '../shared/modele/user';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from '../shared/action/action';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { isUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  data: Observable<UserI>;
  constructor(private router: Router, private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*[0-9]*')]),
    })

    this.data = store.select('user');
  }
  ngOnInit() {
    this.data.subscribe((data: any) => {
      if (data) {

        console.log(data);
        let Message = data.message;
        let accessToken = data.accessToken;
        if (Message === "OK") {
          localStorage.setItem('token', accessToken);
          this.router.navigateByUrl('/home')
        }
      }
    })

  }



  loginBtn() {
    console.log(this.loginForm.value);
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.store.dispatch(new Actions.authentification({ email, password }))


  }


}
