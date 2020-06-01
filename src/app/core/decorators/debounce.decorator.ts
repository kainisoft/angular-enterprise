/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

export function Debounce(delay = 300): MethodDecorator {
  return (target, property, descriptor: PropertyDescriptor) => {
    const timer = Symbol();
    const original = descriptor.value;

    descriptor.value = function(...args) {
      clearTimeout(this[timer]);
      this[timer] = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}
