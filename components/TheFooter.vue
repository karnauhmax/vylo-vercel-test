<script lang="ts" setup>
const nav = [
  {
    title: 'Vylo',
    links: [
      { href: '/about', text: 'About us' },
      { href: '/press', text: 'Press' },
    ],
  },
  {
    title: 'For Creators',
    links: [
      {
        href: 'https://www.dropbox.com/s/zw8fis8bnllopqn/Vylo_CreatorMediaKit.pdf?dl=0',
        text: 'Creator Media Kit',
      },
    ],
  },
  {
    title: 'Help',
    links: [
      { href: '/faq', text: 'Knowledge Base' },
      { href: '/contact', text: 'Contact Us' },
    ],
  },
];

const soc = [
  {
    href: 'https://www.instagram.com/vylosports/',
    icon: '/inst.svg',
  },
  {
    href: 'https://www.tiktok.com/@vylosports',
    icon: '/tt.svg',
  },
  {
    href: 'https://www.linkedin.com/company/vylo/',
    icon: '/in.svg',
  },
  {
    href: 'https://www.crunchbase.com/organization/vylo',
    icon: '/sb.svg',
  },
];

const currentYear = ref(new Date().getFullYear());

const linkTo = ref('');

/** Returns link to app store depending on device */
const getStoreLink = () =>
  /iPhone/.test(navigator.userAgent)
    ? 'https://apps.apple.com/us/app/vylo/id1627569855'
    : 'https://play.google.com/store/apps/details?id=com.vylo.androidapplication';

onMounted(() => {
  // Get current year
  currentYear.value = new Date().getFullYear();

  // Set link to app store, depending on device
  linkTo.value = getStoreLink();
});
</script>
<template>
  <footer class="footer">
    <div class="footer__head">
      <div class="footer__head-bg"></div>
      <div class="footer__head-content">
        <div class="footer__head-left">
          <div class="footer__logo">
            <NuxtLink href="/" class="footer__logo-link hover-fadein" aria-label="Vylo home page">
          <svg width="551" height="187" viewBox="0 0 551 187" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M122.789 3.60889H131.175H169.098L184.216 143.768H186.778L201.896 3.60889H239.818H246.66L217.782 182.972H152.955L122.789 3.60889Z" fill="white"/>
              <path d="M286.056 115.27L251.977 3.40527H290.406L306.6 71.2974L322.552 3.40527H358.806L325.935 115.995V183.162H286.056V115.27Z" fill="white"/>
              <path d="M362.727 3.6084H404.749V182.971H362.727V3.6084ZM383.994 148.124H442.671V182.971H383.994V148.124Z" fill="white"/>
              <path d="M498.648 186.556C488.057 186.556 478.833 184.762 470.975 181.175C463.117 177.417 457.053 172.122 452.782 165.289C448.683 158.456 446.633 150.427 446.633 141.203V45.3718C446.633 36.1474 448.683 28.1188 452.782 21.2859C457.053 14.453 463.117 9.24294 470.975 5.65568C478.833 1.8976 488.057 0.0185547 498.648 0.0185547C509.239 0.0185547 518.463 1.8976 526.321 5.65568C534.179 9.24294 540.158 14.453 544.257 21.2859C548.528 28.1188 550.663 36.1474 550.663 45.3718V141.203C550.663 150.427 548.528 158.456 544.257 165.289C540.158 172.122 534.179 177.417 526.321 181.175C518.463 184.762 509.239 186.556 498.648 186.556ZM501.979 148.89C504.2 148.89 505.908 148.377 507.104 147.352C508.299 146.157 508.897 144.448 508.897 142.228V44.3468C508.897 42.1261 508.299 40.5033 507.104 39.4784C505.908 38.2826 504.2 37.6848 501.979 37.6848H495.317C493.096 37.6848 491.388 38.2826 490.192 39.4784C488.997 40.5033 488.399 42.1261 488.399 44.3468V142.228C488.399 144.448 488.997 146.157 490.192 147.352C491.388 148.377 493.096 148.89 495.317 148.89H501.979Z" fill="white"/>
              <path d="M52.9779 3.55762V91.0653H0.976562L52.9779 3.55762Z" fill="white"/>
              <path d="M39.3201 186.464L39.3201 88.2974L99.8516 88.2974L39.3201 186.464Z" fill="white"/>
          </svg>
            </NuxtLink>
          </div>
          <div class="footer__tag">The sports app of the internet</div>
          <div class="footer__button-mob">
            <TheButton class="header__button-item" text="Get Vylo" :link="linkTo" :is-link="true" />
          </div>
          <div class="footer__download">
            <NuxtLink
              href="https://apps.apple.com/us/app/vylo/id1627569855"
              target="_blank"
              class="footer__download-link hover-fadein"
              aria-label="Download Vylo from App Store"
            >
              <NuxtImg src="/app-store.svg" alt="app store" width="163" height="50" loading="lazy" />
            </NuxtLink>
            <NuxtLink
              href="https://play.google.com/store/apps/details?id=com.vylo.androidapplication"
              target="_blank"
              class="footer__download-link hover-fadein"
              aria-label="Download Vylo from Google Play"
            >
              <NuxtImg src="/google-play.svg" alt="google play" width="163" height="50" loading="lazy" />
            </NuxtLink>
          </div>
          <div class="footer__code">
            <NuxtImg src="/vylo-qr.svg" alt="" loading="lazy" width="150" height="150" />
          </div>
        </div>
        <div class="footer__head-right">
          <div class="footer__nav">
            <div v-for="list in nav" class="footer__list">
              <div class="footer__list-title h5">
                {{ list.title }}
              </div>
              <div class="footer__list-links">
                <NuxtLink v-for="link in list.links" class="footer__list-link hover-fadein" :href="link.href">
                  {{ link.text }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="footer__soc">
            <NuxtLink
              v-for="link in soc"
              class="footer__soc-item hover-fadein"
              :href="link.href"
              aria-label="Vylo social media"
            >
              <NuxtImg :src="link.icon" alt="" loading="lazy" width="32" height="32" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__foot">
      <div class="footer__copyrights">© {{ currentYear }} Vylo, Inc. <span>All Rights Reserved</span></div>
      <div class="footer__info">
        <NuxtLink href="/privacy" class="hover-fadeout"> Privacy Policy </NuxtLink>
        <span>|</span>
        <NuxtLink href="/terms" class="hover-fadeout"> Terms of Service </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-left: vw(24px);
  padding-right: vw(24px);
  width: 100vw;
  overflow: hidden;
  @include max(sm) {
    padding-left: 0;
    padding-right: 0;
    background: var(--color-black);
  }
}
.footer__head {
  padding: vw(32px) vw(43px);
  position: relative;
  @include max(sm) {
    padding: 38px 32px 78px;
  }
  @include max(xs) {
    padding: 20px 21px 0;
  }
}
.footer__head-content {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.footer__head-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 0;
  background: #1d1d1d;
  /* background: #0000FF;  */
  border-radius: vw(20px);
  @include max(sm) {
    display: none;
  }
}
.footer__logo {
  width: vw(100px);
  margin-bottom: vw(4px);
  @include max(sm) {
    width: 98px;
    margin-bottom: 12px;
  }
  @include max(xs) {
    width: 62px;
    margin-bottom: 10px;
  }
}
.footer__logo svg {
  width: 100%;
  height: 100%;
}
.footer__download {
  display: flex;
  align-items: center;
  margin-top: vw(56px);
  margin-bottom: vw(28px);
  @include max(sm) {
    display: none;
  }
}
.footer__download-link {
  flex: 0 0 vw(138px);
  @include max(sm) {
    flex: none;
    width: 140px;
    display: none;
  }
  @include max(xs) {
    width: 100px;
  }
}
.footer__download-link:nth-child(1) {
  margin-right: vw(16px);
  @include max(sm) {
    margin-right: 0;
    margin-bottom: 8px;
  }
  @include max(xs) {
    margin-bottom: 3px;
  }
}
.footer__button-mob {
  display: none;
  @include max(sm) {
    display: flex;
    margin-top: 22px;
  }
  @include max(xs) {
    margin-top: 14px;
  }
}
.footer__code {
  width: vw(117px);
  @include max(sm) {
    display: none;
  }
}
.footer__list-title {
  color: #fff;
  font-size: vw(34px);
  margin-bottom: vw(24px);
  @include max(sm) {
    font-size: 15px;
    margin-bottom: 24px;
  }
  @include max(xs) {
    margin-bottom: 15px;
  }
}
.footer__list-link:not(:last-child) {
  margin-bottom: vw(7px);
  @include max(sm) {
    margin-bottom: 7px;
  }
  @include max(xs) {
    margin-bottom: 4px;
  }
}
.footer__list-link {
  color: #fff;
  text-decoration: none;
  font-family: "OTNeueMontreal-MediumSemiSqueezed", arial;
  font-size: vw(22px);
}
.footer__list-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: vw(16px);
  line-height: 1.5;

  @include max(sm) {
    font-size: 8.845px;
  }
}
.footer__nav {
  display: flex;
  margin-right: vw(70px);
  @include max(sm) {
    margin-right: 23px;
  }
  @include max(xs) {
    margin-right: 0;
    flex-wrap: wrap;
    width: 207px;
    margin-left: 30px;
  }
}
.footer__list:nth-child(1) {
  margin-right: vw(84px);
  @include max(sm) {
    margin-right: 84px;
  }
  @include max(xs) {
    margin-right: 60px;
    margin-bottom: 31px;
  }
}
.footer__list:nth-child(2) {
  margin-right: vw(74px);
  @include max(sm) {
    margin-right: 70px;
  }
  @include max(xs) {
    margin-right: 0;
    margin-bottom: 31px;
  }
}
.footer__list:nth-child(3) {
  @include max(xs) {
    flex: 0 0 100%;
  }
}
.footer__soc {
  display: flex;
  align-items: center;
  @include max(sm) {
    display: none;
  }
}
.footer__soc-item {
  margin-left: vw(19px);
  width: vw(24px);
  height: vw(24px);
}
.footer__head-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.footer__foot {
  font-family: "OTNeueMontreal-MediumSemiSqueezed", arial;
  font-size: vw(18px);
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-top: vw(16px);
  padding-bottom: vw(8px);
  justify-content: space-between;
  opacity: 0.8;
  color: var(--color-white);
  @include max(sm) {
    padding-top: 0;
    padding-bottom: 20px;
    padding-left: 22px;
  }
}

.footer__tag {
  font-family: "OTNeueMontreal-MediumSemiSqueezed", arial;
  font-size: vw(24px);
  padding-top: vw(5px);
  padding-bottom: vw(2px);
  opacity: 1;
  color: var(--color-white); 
}
.footer__info {
  align-items: center;
  display: flex;

  & a {
    color: inherit;
    opacity: 0.8;
    text-decoration: none;
  }

  @include max(sm) {
    display: none;
  }
}
.footer__info > span {
  margin-inline: vw(10px);
}
.footer__copyrights {
  @include max(xs) {
    transform: translateY(-100%);
  }
}
.footer__copyrights span {
  @include max(sm) {
    display: none;
  }
}
</style>
