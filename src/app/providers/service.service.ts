import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  RssURL:string="";

  getRssURL(){
    return this.RssURL;
  }

  setRssURL(url){
    this.RssURL = url;
  }
}
