import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:3000';
  TOKEN_KEY = 'x-access-token';
  constructor(private http: HttpClient, private router: Router) { }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
}

get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
}

logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    this.router.navigateByUrl('/');
}
get admin(){
    return localStorage.getItem("admin")
}

get users(){
    return localStorage.getItem("user");
}

login(email: string, pass: string) {
    const headers = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };

    const data = {
        email: email,
        password: pass
    };
    console.log(data)

    this.http.post(this.API_URL + '/users/authenticate', data).subscribe(
        (res: any) => {
            console.log(res);
            localStorage.setItem(this.TOKEN_KEY, res.data.token);
            localStorage.setItem("email",email)
            localStorage.setItem("role", res.data.user.roles)
            if(res.data.user.roles=="admin")
            {
                localStorage.setItem("admin", res.data.user.roles)
            this.router.navigateByUrl('/members');
            }
            else
            {
                localStorage.setItem("user", res.data.user.roles)
                this.router.navigateByUrl('/membersusers');
            }
        }
    );
}
getAccount() {
   const data = {
        email: localStorage.getItem("email")
    }
    console.log(data);   
   
    return this.http.post(this.API_URL + '/users/getusers',data);
}

}
