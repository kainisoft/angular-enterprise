import {AbstractState} from '../state-management/abstract-state';
import {BaseComponent} from './base.component';

export class ListComponent extends BaseComponent {
  trackByFn(index, entity: AbstractState) {
    return entity.id;
  }
}
