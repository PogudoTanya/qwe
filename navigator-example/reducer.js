import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history.service';

import favourites from './screens/Favourites/favourites.reducer';

const reducers = {
  favourites,
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  ...reducers,
});

export default rootReducer;
