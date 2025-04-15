import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserModel } from "src/models/userModel";

@Injectable()
export class LoginService { 
    constructor(private http: HttpClient) {}
    
    addUser(newUser: IUserModel) {
        // let body = JSON.stringify(newUser);
        return this.http.post("https://localhost:44306/api/home/saveUser", newUser);
    }

    getCredentials(): Observable<[{username: string, email: string}]> {
        return this.http.get<[{username: string, email: string}]>("https://localhost:44306/api/home/getCredentails");
    }
    
    getuser() {
        return this.http.get("https://localhost:44306/api/home/getAllUsers");
    }    

    loginuser(username: string, password: string) {
        return this.http.post(`https://localhost:44306/api/home/login`, {username, password});
    }

    testJWT() {
        return this.http.get('https://localhost:44306/api/home/testJWT');
    }
 }