import {Action, Reducer, Store} from 'redux';
import {Epic} from 'redux-observable';
import {SystemsState} from './reducers';
import {BehaviorSubject} from 'rxjs';

export type RootStoreState = {
  systems: SystemsState;
};

export type RootEpicDependency = {};

export type RootEpic = Epic<Action, Action, RootEpic, RootEpicDependency>;

export type ReducerManger = {
  reducer: Reducer<RootStoreState, Action>;
  add(key: string, reducer: Reducer): void;
  remove(key: string): void;
};

export type StoreContainer = {
  store: Store;
  reducerManager: ReducerManger;
  epic$: BehaviorSubject<Epic>;
  action$: BehaviorSubject<Action>;
  addEpic: (epic: Epic) => void;
  persistor: any;
};
