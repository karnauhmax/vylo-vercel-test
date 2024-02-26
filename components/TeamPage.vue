<template>
  <div class="team-wrap">
    <p>Our Leadership Team</p>
  </div>
  <div class="team-page">
    <div class="team-members">
      <div v-for="(employee, index) in employees" :key="index" class="employee-card">
        <img :src="employee.image" :alt="employee.name" class="profile-image" />
        <h3>{{ employee.name }}</h3>
        <h4>{{ employee.title }}</h4>
        <h5><span><a :href="employee.linkedin" target="_blank">Linkedin<strong>→</strong></a></span></h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          name: "Tyler Reynolds",
          title: "CEO & Founder",
          image: "tr.jpg",
          linkedin: "https://www.linkedin.com/in/tylerreynolds10/",
        },
        {
          name: "Andriy Gubar",
          title: "CTO",
          image: "ag.jpg",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "John Tejada",
          title: "Head of Growth",
          image: "jt.jpg",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Kevin Cuenca",
          title: "Digital Strategy Director",
          image: "kc.jpeg",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Matthew Goss",
          title: "Customer Lifecycle",
          image: "mg.jpeg",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Rafael Cardoli",
          title: "Head of News",
          image: "rc.jpeg",
          linkedin: "https://www.linkedin.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-page {
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
  padding: 50px 0 100px 0;
}

.team-title {
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the first row horizontally */
}

.employee-card {
  text-align: center;
  margin: 10px;
  margin-bottom: 30px;
  width: 300px;
}

.profile-image {
  width: 300px; /* Adjust the size as needed */
  height: 300px; /* Adjust the size as needed */
  border-radius: 0;
  margin-bottom: 10px;
}
</style>