/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {AbstractEntityState, AbstractState} from '../../../../core/state-management/abstract-state';

export interface SseChannel extends AbstractState {
  eventName: string;
  listener: (args: any) => any;
  params?: {[key: string]: any};
}

export type ChannelList = SseChannel[];

export interface SseState extends AbstractEntityState<SseChannel> {

}
