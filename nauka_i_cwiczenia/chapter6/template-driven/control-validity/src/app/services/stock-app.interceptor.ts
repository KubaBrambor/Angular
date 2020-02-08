import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import {HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do'
;
@Injectable()
export class StockAppInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        if(this.auth.authToken) {
            req = req.clone({
                headers: req.headers.set('Authorization', this.auth.authToken)
            });
            console.log('Making an authorized request');
        }
        return next.handle(req)
        .do(event => this.handleResponse(req, event),
            error => this.handleError(req, error));
    }

    handleResponse(req: HttpRequest<any>, event) {
        console.log('Handling response for ', req.url, event);
        if(event instanceof HttpResponse) {
            console.log('Request for ', req.url, ' Response Status ', 
            event.status, ' With body ', event.body);
        }
    }

    handleError(req: HttpRequest<any>, event) {
        console.error('Request for ', req.url, ' Response Status ', event.status,
        ' With error ', event.error);
    }
}

