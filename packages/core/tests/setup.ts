/** jsdom lacks PointerEvent; animated press triggers require it. */
if (typeof globalThis.PointerEvent !== "function") {
  class PointerEventPolyfill extends Event {
    button: number;
    constructor(type: string, init: PointerEventInit = {}) {
      super(type, init);
      this.button = init.button ?? 0;
    }
  }
  // @ts-expect-error test polyfill
  globalThis.PointerEvent = PointerEventPolyfill;
}
