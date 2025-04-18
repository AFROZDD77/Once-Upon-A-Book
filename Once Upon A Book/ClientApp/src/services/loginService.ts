import { HttpClient, HttpHeaders } from "@angular/common/http";
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

    gethorrorBooks() {
        const headers = new HttpHeaders({
            "X-User-Agent": "MyAppName/1.0 (myemail@example.com)"
        });
        return this.http.get('https://openlibrary.org/search.json?title=the+lord+of+the+rings&limit=5&offset=0&fields=subject,title,cover_i,first_publish_year,ratings_average,ratings_count,number_of_pages_median');
    }
 }