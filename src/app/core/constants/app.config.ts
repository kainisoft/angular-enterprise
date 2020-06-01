/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

export enum LayoutType {
  VERTICAL,
  SLIM,
  BLANK
}

export interface AppConfig {
  readonly layout: LayoutType;
  readonly timezone: string;
}

export const appConfig: AppConfig = {
  layout: LayoutType.VERTICAL,
  timezone: null,
};
