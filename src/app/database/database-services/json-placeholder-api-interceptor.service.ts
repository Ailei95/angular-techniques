import {Injectable} from '@angular/core';

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class JsonPlaceholderApiInterceptorService implements HttpInterceptor {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((data: any) => {}),
      catchError((error: HttpErrorResponse) => {

        this._snackBar.open('un error with status code occurred: ' + error.status, 'OK', {
          duration: 5000,
        });

        return of(error);
      })
    );
  }
}
