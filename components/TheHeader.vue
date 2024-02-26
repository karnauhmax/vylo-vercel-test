<script lang="ts" setup>
import { openPopup } from '@/composables/openPopup';

const linkTo = ref('');

/** Returns link to app store depending on device */
const getStoreLink = () =>
  /iPhone/.test(navigator.userAgent)
    ? 'https://apps.apple.com/us/app/vylo/id1627569855'
    : 'https://play.google.com/store/apps/details?id=com.vylo.androidapplication';

const isDesktop = () => {
  return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

onMounted(() => {
  // Set link to app store, depending on device
  linkTo.value = getStoreLink();
});

const downloadButtonClickHandler = (event: MouseEvent) => {
  if (isDesktop()) {
    event.preventDefault();
    openPopup();
  }
};
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <NuxtLink href="/" class="header__logo-link hover-fadein" aria-label="Vylo home page">
          <svg width="551" height="187" viewBox="0 0 551 187" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M122.789 3.60889H131.175H169.098L184.216 143.768H186.778L201.896 3.60889H239.818H246.66L217.782 182.972H152.955L122.789 3.60889Z" fill="black"/>
              <path d="M286.056 115.27L251.977 3.40527H290.406L306.6 71.2974L322.552 3.40527H358.806L325.935 115.995V183.162H286.056V115.27Z" fill="black"/>
              <path d="M362.727 3.6084H404.749V182.971H362.727V3.6084ZM383.994 148.124H442.671V182.971H383.994V148.124Z" fill="black"/>
              <path d="M498.648 186.556C488.057 186.556 478.833 184.762 470.975 181.175C463.117 177.417 457.053 172.122 452.782 165.289C448.683 158.456 446.633 150.427 446.633 141.203V45.3718C446.633 36.1474 448.683 28.1188 452.782 21.2859C457.053 14.453 463.117 9.24294 470.975 5.65568C478.833 1.8976 488.057 0.0185547 498.648 0.0185547C509.239 0.0185547 518.463 1.8976 526.321 5.65568C534.179 9.24294 540.158 14.453 544.257 21.2859C548.528 28.1188 550.663 36.1474 550.663 45.3718V141.203C550.663 150.427 548.528 158.456 544.257 165.289C540.158 172.122 534.179 177.417 526.321 181.175C518.463 184.762 509.239 186.556 498.648 186.556ZM501.979 148.89C504.2 148.89 505.908 148.377 507.104 147.352C508.299 146.157 508.897 144.448 508.897 142.228V44.3468C508.897 42.1261 508.299 40.5033 507.104 39.4784C505.908 38.2826 504.2 37.6848 501.979 37.6848H495.317C493.096 37.6848 491.388 38.2826 490.192 39.4784C488.997 40.5033 488.399 42.1261 488.399 44.3468V142.228C488.399 144.448 488.997 146.157 490.192 147.352C491.388 148.377 493.096 148.89 495.317 148.89H501.979Z" fill="black"/>
              <path d="M52.9779 3.55762V91.0653H0.976562L52.9779 3.55762Z" fill="black"/>
              <path d="M39.3201 186.464L39.3201 88.2974L99.8516 88.2974L39.3201 186.464Z" fill="black"/>
          </svg>
        </NuxtLink>
      </div>

      <nav class="header__menu">
        <ul class="header__list">
          <li>
            <NuxtLink class="header__link" to="/about"> About </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header__link" to="/faq"> FAQ </NuxtLink>
          </li>
          <li>
            <a :href="linkTo" @click="downloadButtonClickHandler" class="header__link">Download</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 100;
  padding: vw(14px);
  width: 100%;
  animation: slideIn 700ms ease-in-out;
  animation-delay: 0.2;
  transition: background-color 0.3s ease;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    width: 45%;

    transition: width 0.1s ease;

    @include max(sm) {
      width: 100%;
    }
  }

  &__list {
    display: flex;
    padding: 0;
    list-style: none;
    margin-bottom: 0;
    gap: 30px;
  }

  &__link {
    color: var(--brand-blue);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 28px;
    font-family: 'OTNeueMontreal-MediumSqueezed', sans-serif;
    transition: color 0.3s ease;

    @include max(sm) {
      font-size: 20px;
    }
  }

  @include max(sm) {
    padding: 24px 21px;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.header__button-item {
  background-color: var(--color-white);
  color: var(--color-black);
  font-weight: 400;
  transition-property: background-color, border-color, color, box-shadow, transform, opacity;
  transition-duration: 0.2s;
}
.header__logo-link svg {
  width: vw(98px);
  height: auto;
  fill: var(--color-black);

  @include max(sm) {
    width: 98px;
  }
  @include max(xs) {
    width: 76px;
  }
}
.header__button {
  margin-left: auto;
  display: flex;
  @include max(sm) {
    display: none;
  }
}
.header__button-mob {
  margin-left: auto;
  display: none;
  @include max(sm) {
    display: flex;
  }
}
</style>
