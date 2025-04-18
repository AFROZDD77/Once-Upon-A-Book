import { Injectable } from "@angular/core";

@Injectable()
export class PasswordIconHelper {
    // static getPasswordIcon(isPasswordVisible: boolean): string {
    //     return isPasswordVisible ? 'visibility' : 'visibility_off';
    // }

    static togglePasswordIcon(id: string) {
        let element = document.getElementById(id) as HTMLInputElement;
        let elementIcon = document.getElementById(id + 'Icon') as HTMLLinkElement;
        if (element.type === 'password') {
          element.type = 'text';  
          elementIcon.classList.remove('bi-eye-slash');
          elementIcon.classList.add('bi-eye');
        } else {
          element.type = 'password';  
          elementIcon.classList.remove('bi-eye');
          elementIcon.classList.add('bi-eye-slash');
        }
      }
}