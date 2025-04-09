import { Injectable, signal } from "@angular/core";

@Injectable()
export class LoginService {
    private = signal<Array<string>>(['']);
}