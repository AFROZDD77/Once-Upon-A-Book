import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class JwtInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // Get the JWT token from local storage or any other storage mechanism
        const token = localStorage.getItem('Jwt_Token');
       
        // Clone the request and add the JWT token to the headers
        // if (token) {
        //     request = request.clone({
        //         // headers: request.headers.set('Content-Type', 'application/json'), 
        //         setHeaders: {
        //             Authorization: `Bearer ${token}`
        //         }
        //     });
        // }
       return next.handle(request);
    }
}