<template>
  <div class="about-wrapper">
    <div class="about">
      <h1 class="about-title">Press</h1>
      <div class="press-contact">
        <h2>Contact</h2>
        <p>For press related inquiries please contact support@vylo.com</p>
        <p>For specific design requests please contact social@vylo.com</p>
      </div>

      <div class="media-sources">
        <h3>Media Resources</h3>
      </div>

      <div class="row" data-v-37b7d702="">
        <div class="col-4 col-md-4">
          <div class="theme-white border-radius padding-1">
            <h3 class="font-size-intermediate margin-bottom-nudge">Logo &amp; Fonts</h3>
            <div
              class="tidal-image-wrapper margin-bottom-nudge block position-relative tidal-lazy-image-wrapper tidal-lazy-image-wrapper--loaded"
            >
              <NuxtPicture
                src="/pr-vylo1.jpg"
                alt=""
                class="tidal-image block tidal-lazy-image fade-in tidal-lazy-image--handled"
                placeholder
                width="720"
                height="382"
              />
            </div>
            <NuxtLink href="https://dropbox.com/vylo.zip" class="text-dec-none download-text">
              <span class="color-grey font-size-medium text-align-medium">
                <i class="tidal-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M20,5.63A10.2,10.2,0,0,0,4,18.37a10.13,10.13,0,0,0,6.84,3.77A10.42,10.42,0,0,0,12,22.2,10.2,10.2,0,0,0,20,5.63ZM20.65,13A8.7,8.7,0,1,1,12,3.3a8.79,8.79,0,0,1,1,.05A8.7,8.7,0,0,1,20.65,13Z"
                    />
                    <path
                      d="M12.8 14.2L12.8 6.6 11.3 6.6 11.3 14.2 8.5 11.5 7.4 12.5 12 17.1 16.6 12.5 15.5 11.5 12.8 14.2z"
                    />
                  </svg>
                </i>
              </span>
              Download
            </NuxtLink>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div class="theme-white border-radius padding-1">
            <h3 class="font-size-intermediate margin-bottom-nudge" data-v-37b7d702="">Brand &amp; Lifestyle</h3>
            <div
              class="tidal-image-wrapper margin-bottom-nudge block position-relative tidal-lazy-image-wrapper tidal-lazy-image-wrapper--loaded"
            >
              <NuxtPicture
                src="/pr-vylo2.jpg"
                alt=""
                class="tidal-image block tidal-lazy-image fade-in tidal-lazy-image--handled"
                placeholder
                width="720"
                height="382"
              />
            </div>
            <NuxtLink href="https://dropbox.com/vylo.zip" class="text-dec-none download-text">
              <span class="color-grey font-size-medium text-align-medium">
                <i class="tidal-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M20,5.63A10.2,10.2,0,0,0,4,18.37a10.13,10.13,0,0,0,6.84,3.77A10.42,10.42,0,0,0,12,22.2,10.2,10.2,0,0,0,20,5.63ZM20.65,13A8.7,8.7,0,1,1,12,3.3a8.79,8.79,0,0,1,1,.05A8.7,8.7,0,0,1,20.65,13Z"
                    />
                    <path
                      d="M12.8 14.2L12.8 6.6 11.3 6.6 11.3 14.2 8.5 11.5 7.4 12.5 12 17.1 16.6 12.5 15.5 11.5 12.8 14.2z"
                    />
                  </svg>
                </i>
              </span>
              Download
            </NuxtLink>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div class="theme-white border-radius padding-1">
            <h3 class="font-size-intermediate margin-bottom-nudge">Product UI</h3>
            <div
              class="tidal-image-wrapper margin-bottom-nudge block position-relative tidal-lazy-image-wrapper tidal-lazy-image-wrapper--loaded"
            >
              <NuxtPicture
                src="/pr-vylo3.jpg"
                alt=""
                class="tidal-image block tidal-lazy-image fade-in tidal-lazy-image--handled"
                placeholder
                width="720"
                height="382"
              />
            </div>
            <NuxtLink href="https://dropbox.com/vylo.zip" class="text-dec-none download-text">
              <span class="color-grey font-size-medium text-align-medium">
                <i class="tidal-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M20,5.63A10.2,10.2,0,0,0,4,18.37a10.13,10.13,0,0,0,6.84,3.77A10.42,10.42,0,0,0,12,22.2,10.2,10.2,0,0,0,20,5.63ZM20.65,13A8.7,8.7,0,1,1,12,3.3a8.79,8.79,0,0,1,1,.05A8.7,8.7,0,0,1,20.65,13Z"
                    />
                    <path
                      d="M12.8 14.2L12.8 6.6 11.3 6.6 11.3 14.2 8.5 11.5 7.4 12.5 12 17.1 16.6 12.5 15.5 11.5 12.8 14.2z"
                    />
                  </svg>
                </i>
              </span>
              Download
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.about-wrapper {
  background-color: #f4f4f4;
  padding-top: vw(120px);
  @include max(bg) {
    padding-top: 200px;
  }
  @include max(xs) {
    padding-top: 120px;
  }
}
.about {
  color: var(--color-black);
  width: vw(1000px);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: vw(100px);
  clear: both;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1404px;
  width: 100%;

  @include max(bg) {
    padding-bottom: 100px;
  }
  @include max(xs) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 100px;
  }
}
.about-title {
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  font-weight: 950;
  color: var(--color-black);
  text-align: center;
  margin-bottom: 2.0833333333vw;
  font-size: 3rem;
  margin-bottom: vw(30px);
  @include max(bg) {
    margin-bottom: 30px;
  }
}
p,
li {
  line-height: 1.5;
}

.press-contact {
  margin: 70px 0;
}

.press-contact h2,
.press-contact h3 {
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  color: var(--color-black);
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 1rem;
}

.press-contact p {
  font-family:
    'SuisseIntl-Regular',
    arial,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: var(--color-black);
  line-height: 1;
  margin: 10px 0;
}

.media-sources {
  margin: 20px 0;
  line-height: 1;
}
.media-sources h2,
.media-sources h3 {
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  font-weight: 950;
  color: var(--color-black);
  font-size: 2rem;
  line-height: 1;
  padding-bottom: 10px;
}

.media-sources p {
  font-family:
    'SuisseIntl-Regular',
    arial,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: var(--color-black);
  line-height: 1.5;
}

.theme-white {
  background-color: #fff;
  color: #26282d;
  padding: 1.5rem !important;
}

.theme-white h2,
.theme-white h3 {
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  font-weight: 950;
  color: var(--color-black);
  font-size: 1rem;
  line-height: 1;
  margin-bottom: 1rem;
}

.position-relative {
  position: relative;
}

.block {
  display: block;
}

.font-size-medium {
  font-size: 1.5rem;
  line-height: 1.25;
}

.font-size-intermediate {
  font-size: 1.25rem;
  line-height: 1.5;
}

.tidal-icon {
  display: inline-block;
  position: relative;
  padding-right: 8px;
}

.tidal-icon svg {
  fill: #111;
  opacity: 0.5;
  height: 1em;
  width: 1em;
  vertical-align: top;
}

.download-text {
  font-family:
    'SuisseIntl-Regular',
    arial,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: var(--color-black);
  line-height: 1.5;
}

.text-align-medium {
  position: relative;
}

.text-dec-none {
  border-bottom: 0;
  text-decoration: none;
  color: #111;
}

.margin-bottom-nudge {
  margin-bottom: 0.75rem !important;
}

.border-radius {
  border-radius: 6px;
}
</style>
