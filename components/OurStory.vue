<template>
  <section class="pending2">
    <div>
      <SimpleLayout2
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
    descr: 'Our Story',
    title: 'Vylo was born in 2021 when two friends had conversations into what a social media sports platform could look like. With backgrounds in sports and media, these late night conversations turned into the early formations of a startup company. With the help of the creative and sports community, Vylo has evolved and is now positioned as the next power platform for sports fans. We aim to inform, inspire, and entertain our sports communities in the most authentic way possible.',
  },
  {
    id: 1,
    descr: 'Our Mission',
    title: 'Vylo is more than an app; its a dynamic universe where sports culture and creator content converge, redefining how enthusiasts connect, express, and revel in the sporting experience. At Vylo, our mission is to empower individuals to immerse themselves in the excitement of sports, fostering genuine connections through authentic self-expression. We go beyond the scores and headlines, offering a platform where users seamlessly navigate sports news, explore matchups, and indulge in original, entertaining content. Vylo is your passport to the heart of sports culture, where real moments are celebrated, and our innovative approach transforms the digital and physical worlds into an exhilarating tapestry of shared experiences. Join us as we revolutionize the intersection of culture, social media, and sports, making Vylo the ultimate destination for those who crave the thrill of sports and the richness of genuine connection.',
  },
];
</script>

<style lang="scss" scoped>
</style>