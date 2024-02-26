import { store } from '~/store/store';

export const lockScrollBody = (param: boolean): void => {
  const body = document.body;

  if (param) {
    body.style.overflowY = 'hidden';
    if (!isSafari()) {
      store.scrollLenis?.stop();
    }
  } else {
    body.style.overflowY = 'auto';
    if (!isSafari()) {
      store.scrollLenis?.start();
    }
  }
};
