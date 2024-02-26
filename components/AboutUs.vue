<template>
  <section class="pending1">
    <div>
      <SimpleLayout
        v-for="({ descr, title, id,}, index) in items"
        :title="title"
        :descr="descr"
        :key="id"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: 1,
    descr: 'About us',
    title: 'Vylo is igniting the future of sports culture and creator content',
  },
];
</script>
