// @flow
import 'rxjs';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import * as actions from './reducers';
import Server from '../api';

export const fetchOrderObservable = (action$: *) =>
    action$
        .ofType(actions.fetchNearbyOrders)
        .mergeMap(() => Server.getNearbyOrders())
        .map(response => actions.fetchNearbyOrdersSuccess(response.results));

export default combineEpics(
    fetchOrderObservable,
);
