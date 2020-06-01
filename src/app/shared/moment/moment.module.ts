import {NgModule} from '@angular/core';
import * as moment from 'moment-timezone';
import {ConfigService} from '../../core/services/config.service';
import {DateFormatPipe} from './pipes/date-format';
import {TimeAgoPipe} from './pipes/time-ago';

@NgModule({
  declarations: [
    TimeAgoPipe,
    DateFormatPipe,
  ],
  imports: [

  ],
  exports: [
    TimeAgoPipe,
    DateFormatPipe,
  ],
  providers: [

  ],
})
export class MomentModule {
  constructor(
    configService: ConfigService,
  ) {
    moment.tz(configService.timezone);
  }
}
