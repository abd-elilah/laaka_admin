import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';

import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpLoginService implements HttpInterceptor{
  router: any;

  constructor() { }

  intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		let authKey = sessionStorage.getItem("auth");
		if (authKey) {
			console.error(" AUTHKEY");
			request = request.clone({
				headers: request.headers.set(
					"Authorization",
					"Basic " + authKey
				),
			});
		}

		return next.handle(request).pipe(
			tap(
				(event: HttpEvent<any>) => {
					if (event instanceof HttpResponse) {
						console.log("GOOD INTERCEPTOR");
					}
				},
				(err: any) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status === 401) {
							console.warn("Interceptor BAAAAAD");
							this.router.navigate(["login"]);
						}
					}
				}
			)
		);
	}


}
