import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as authActions from '../actions/auth.actions';
import { ServiceService } from 'src/app/providers/service.service';

@Injectable()
export class AuthEffects {
url : string = '';
  constructor(private actions$: Actions,
              private http: HttpClient,private service : ServiceService) 
              {
                  this.url =''
                  

              }

  @Effect()
  loadAuths$= this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      this.url = this.service.getRssURL()
      console.log("effects url :",this.url)
      return this.http.get<any>(this.url)
        .pipe(
          map((article) => {
           
            const items :any[] = article.items;
            return new authActions.SetAuths({
          
              articles : items
            });
          })
        )
    })
  );
}
