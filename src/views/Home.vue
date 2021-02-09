<template>
  <div class="home">
    <Slider/>
    <Vacancies/>
    <Instagram/>
    
    

  </div>
</template>

<script>
// @ is an alias to /src
import Vacancies from '@/components/Vacancies.vue';
import Instagram from '@/components/Instagram.vue';
import Slider from '@/components/Slider.vue';


export default {
  name: 'Home',
  components: {
    Vacancies,
    Instagram,
    Slider
  }
}
</script>

