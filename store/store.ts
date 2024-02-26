import Lenis from '@studio-freight/lenis';

interface IStore {
  scrollLenis: Lenis | null;
  videoSoundAction: number;
}

export const store = reactive<IStore>({
  scrollLenis: null,
  videoSoundAction: 0,
});
