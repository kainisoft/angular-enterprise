/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Store} from '@ngrx/store';
import {Action} from '@ngrx/store/src/models';
import {AbstractPayload} from './abstract-payload';

export abstract class AbstractActions<P extends AbstractPayload> {
  StartLoadingAction = this.action(`${this.getEntity()} Start loading`);

  EndLoadingAction = this.action(`${this.getEntity()} End loading`);

  AddOneAction = this.action(`${this.getEntity()} Add one`);

  UpdateOneAction = this.action<P>(`${this.getEntity()} Update one`);

  UpsertOneAction = this.action<P>(`${this.getEntity()} Upsert one`);

  AddManyAction = this.action<P>(`${this.getEntity()} Add many`);

  UpsertManyAction = this.action<P>(`${this.getEntity()} Upsert many`);

  ReplaceAllAction = this.action<P>(`${this.getEntity()} Replace all`);

  RemoveAllAction = this.action<P>(`${this.getEntity()} Remove all`);

  abstract getEntity(): string;

  protected constructor(
    public store: Store,
  ) {

  }

  protected action<T extends P>(type: string) {
    const store = this.store;

    return class implements AbstractAction<P> {
      static TYPE = type;
      type = type;

      constructor(
        public payload: T = null,
        public completeActions = []
      ) {
      }

      dispatch() {
        store.dispatch(this as any);
      }
    };
  }
}

export interface AbstractAction<P extends AbstractPayload> extends Action {
  payload: P;
  completeActions: any[];
}
