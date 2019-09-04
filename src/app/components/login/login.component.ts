import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private LogService:LoginService, private router:Router) { }

  ngOnInit() {
  }
   // tslint:disable-next-line: comment-format
  //Cette methode me permet de se connecter vers mon API
  onLogin(data) {
   this.LogService.login(data)
  .subscribe(resp => {
   // tslint:disable-next-line: typedef-whitespace
    const jwt = resp.body.token;
    this.LogService.saveJwtToken(jwt);
    //ce bout de code me permet de faire une redirection
    this.router.navigateByUrl('/AjoutPartenaire');
  }, err => {
  });
  }

  // isAdmin(){
  //     return this.LogService.isAdmin1();
  //   }

    // isUser(){
    //   return this.LogService.isAdmin();
    // }


}
