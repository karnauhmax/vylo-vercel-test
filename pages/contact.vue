<template>
  <div class="contact-wrapper">
    <div class="contact">
      <h1 class="contact-title h2">Contact Us</h1>
      <p>
        If you need to contact us directly, please send an email to support@vylo.com. Please be sure to include as much
        information as possible so we can help you out to our best ability.
      </p>
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.contact-wrapper {
  padding-top: vw(200px);
  background-color: var(--color-white);
  @include max(bg) {
    padding-top: 200px;
  }
  @include max(xs) {
    padding-top: 120px;
  }
}
.contact {
  color: var(--color-black);
  width: vw(1000px);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: vw(200px);
  @include max(bg) {
    padding-bottom: 200px;
  }
  @include max(xs) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 100px;
  }
}
.contact-title {
  margin-bottom: vw(30px);
  @include max(bg) {
    margin-bottom: 30px;
  }
}
p {
  line-height: 1.5;
}
</style>
