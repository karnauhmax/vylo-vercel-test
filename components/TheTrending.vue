<template>
  <section class="trending two-videos-section">
    <div class="two-videos-section__inner">
      <TrendingItem
        v-for="({ title, descr, id, video, backgroundImage }, index) in items"
        :title="title"
        :descr="descr"
        :video="video.src"
        :background-image="backgroundImage"
        :key="id"
        :index="index"
        :is-video-optimized="video.optimized"
      />
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: 1,
    title: '<div class="line-height92">Hot takes and videos from sports creators</div>',
    descr: 'Video reactions to top sports & lifestyle news from prolete, personalities, creators, and friends',
    video: {
      optimized: true,
      src: '/video/video-1',
    },
    backgroundImage: 'url("/images/bg1.webp")',
  },

  {
    id: 2,
    title: '<div class="line-height92">Original content on the sports you love</div>',
    descr: 'Video reactions to top sports & lifestyle news from prolete, personalities, creators, and friends',
    video: {
      optimized: true,
      src: '/video/video-1',
    },
    backgroundImage: 'url("/images/bg2.webp")',
  },

  {
    id: 3,
    title: '<div class="line-height92">The latest sports news and sportsbook</div>',
    descr: 'Video reactions to top sports & lifestyle news from prolete, personalities, creators, and friends',
    video: {
      optimized: false,
      src: '/video/video-2',
    },
    backgroundImage: 'url("/images/bg3.webp")',
  },
];
</script>
