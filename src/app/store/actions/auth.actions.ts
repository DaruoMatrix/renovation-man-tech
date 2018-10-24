import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths',
  ADD_URL = '[Auth] Url'
}

export class AddUrl implements Action {
  readonly type = AuthActionTypes.ADD_URL
  constructor(public payload: string){

  }
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export interface SetAuthsPayload {
 
  articles : any[];
}



export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;

  constructor(public payload: SetAuthsPayload) {}
}

export type AuthActions = LoadAuths | SetAuths | AddUrl;
