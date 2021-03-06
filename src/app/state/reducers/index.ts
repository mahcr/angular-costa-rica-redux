import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { State as CartState, reducer } from './cart.reducer';

export interface State {
  cart: CartState;
}

export const reducers: ActionReducerMap<State> = {
  cart: reducer
};

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectCart = createFeatureSelector('cart');

export const selectList = createSelector(selectCart, (state: CartState) => state.list);
export const selectItems = createSelector(selectCart, (state: CartState) => state.items);

