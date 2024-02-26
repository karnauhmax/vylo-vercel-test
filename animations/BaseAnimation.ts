export class BaseAnimation {
  parent: HTMLElement | null;

  constructor(parent: HTMLElement | string | null) {
    this.parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
  }
}
