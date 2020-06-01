/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ActionReducer, createFeatureSelector, createSelector, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Select} from '../decorators/select.decorator';
import {AbstractAction, AbstractActions} from './abstract-actions';
import {AbstractPayload} from './abstract-payload';
import {AbstractEntityState, AbstractState} from './abstract-state';

export abstract class AbstractReducer<T extends AbstractState, S extends AbstractEntityState<T>, P extends AbstractPayload> {
  @Select()
  selectIsLoading: () => Observable<boolean>;

  private isRegistered = false;
  protected handlers = {};

  abstract get storeName(): string;

  abstract get reducers(): {[key: string]: (action: AbstractAction<P>, state: S) => S};

  get store(): Store {
    return this.actions.store;
  }

  protected adapter: EntityAdapter<T> = createEntityAdapter<T>({
    sortComparer: false
  });

  protected selectors = this.adapter.getSelectors();

  getInitialState(): AbstractEntityState<T> {
    return this.adapter.getInitialState({
      isLoading: false
    });
  }

  protected constructor(
    protected actions: AbstractActions<P>
  ) {
    this.initReducers();
  }

  private initReducers() {
    const coreReducers = {
      [this.actions.StartLoadingAction.TYPE]: this.startLoadingAction,
      [this.actions.EndLoadingAction.TYPE]: this.endLoadingAction,
      [this.actions.AddOneAction.TYPE]: this.addOneAction,
      [this.actions.UpdateOneAction.TYPE]: this.updateOneAction,
      [this.actions.UpsertOneAction.TYPE]: this.upsertOneAction,
      [this.actions.AddManyAction.TYPE]: this.addManyAction,
      [this.actions.UpsertManyAction.TYPE]: this.upsertManyAction,
      [this.actions.ReplaceAllAction.TYPE]: this.replaceAllAction,
      [this.actions.RemoveAllAction.TYPE]: this.removeAllAction,
    };
    const reducers = Object.assign(coreReducers, this.reducers);

    Object.keys(reducers).forEach(key => {
      this.handlers[key] = (state: S, payload: AbstractAction<P>) => {
        return Object.assign({}, state, reducers[key].call(this, payload, state));
      };
    });
  }

  register() {
    if (this.isRegistered) {
      return;
    }

    this.isRegistered = true;
    this.store.addReducer(this.storeName, this.getReducer);
  }

  private get getReducer(): ActionReducer<EntityState<T>, AbstractAction<P>> {
    return (state = this.getInitialState(), action): EntityState<T> => {
      if (!this.handlers.hasOwnProperty(action.type)) {
        return state;
      }

      return this.handlers[action.type](state, action);
    };
  }

  protected startLoadingAction(action: AbstractAction<P>, state: S): S {
    return {...state, ...{isLoading: true}};
  }

  protected endLoadingAction(action: AbstractAction<P>, state: S): S {
    return {...state, ...{isLoading: false}};
  }

  protected addOneAction(action: AbstractAction<T>, state: S): S {
    return this.adapter.addOne(action.payload, state);
  }

  protected updateOneAction(action, state: S): S {
    return this.adapter.updateOne(action.payload, state);
  }

  protected upsertOneAction(action, state: S): S {
    return this.adapter.upsertOne(action.payload, state);
  }

  protected addManyAction(action: AbstractAction<T[]>, state: S): S {
    return this.adapter.addMany(action.payload, state);
  }

  protected upsertManyAction(action: AbstractAction<T[]>, state: S): S {
    return this.adapter.upsertMany(action.payload, state);
  }

  protected replaceAllAction(action: AbstractAction<T[]>, state: S): S {
    return this.adapter.setAll(
      action.payload,
      this.adapter.removeAll(state),
    );
  }

  protected removeAllAction(action: AbstractAction<T>, state: S): S {
    return this.adapter.removeAll(state);
  }

  createSelector(projector): any {
    return createSelector(
      createFeatureSelector(this.storeName),
      projector
    );
  }

  select(projector) {
    return this.store.select(this.createSelector(projector));
  }

  selectAll(): Observable<T[]> {
    return this.select(this.selectors.selectAll) as any;
  }

  count(): Observable<number> {
    return this.select(this.selectors.selectTotal) as any;
  }

  selectById(id: number): Observable<T> {
    return this.select((state: EntityState<T>) => state.entities[id] ?? null) as any;
  }
}
