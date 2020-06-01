/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {AbstractPayload} from '../../../../core/state-management/abstract-payload';


export interface SsePayload extends AbstractPayload {
  eventName: string;
}

export interface RegisterListenerPayload extends SsePayload {
  listener: (args: any) => any;
  params?: {[key: string]: any};
}

export interface UnRegisterListenerPayload extends SsePayload {

}
