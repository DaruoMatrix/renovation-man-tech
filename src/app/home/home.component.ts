import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

 
import * as fromRoot from '../store/reducers';
import * as authActions from '../store/actions/auth.actions';
import { ServiceService } from '../providers/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string = '';

  constructor(private store: Store<fromRoot.State>,
    private service: ServiceService ) {}

  ngOnInit() {
   // this.store.dispatch(new authActions.LoadAuths());
  }

  setRssURL(url){
    this.service.setRssURL(url);
    //console.log(url);
  }

  setUrl(url){
    this.store.dispatch(new authActions.AddUrl(url));
    console.log("set url",url);
  }



}
