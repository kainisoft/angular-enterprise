/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

function toLowerCase(s: string) {
  s = s.replace(/select/, '');

  return s && `${s[0].toLowerCase()}${s.slice(1)}`;
}

export function Select(): PropertyDecorator {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get() {
        const select = toLowerCase(propertyKey);

        return () => {
          return this.select((state: any) => state[select]);
        };
      }
    });
  };
}
