import * as authActions from '../actions/auth.actions';

export interface State {

  articles: any[];
  url:string
}

export const initialState: State = {

  articles:[],
  url: 'https://api.rss2json.com/v1/api.json?rss_url=https://blog.angular.io/feed'
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return handleSetAuths(state, action);
      
    case authActions.AuthActionTypes.ADD_URL:
      return state

    default:
      return state;
  }
}

function handleSetAuths(state: State, action: authActions.SetAuths): State {
  return {
    ...state,
    articles: action.payload.articles
  };
}


export const getArticles = (state: State) => state.articles;
