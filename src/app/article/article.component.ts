import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store/reducers';
import { LoadAuths } from '../store/actions/auth.actions';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles$: Observable<any[]>;

  constructor(private store: Store<fromStore.State>) { 

  }

  ngOnInit() {

    this.articles$ = this.store.select(fromStore.getArticles);

    this.store.dispatch(new LoadAuths());

  }

}
