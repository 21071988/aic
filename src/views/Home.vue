<template>
  <div class="home">
    <Slider/>
    <Vacancies/>
    <Instagram/>
    <Map/>
    
    

  </div>
</template>

<script>
// @ is an alias to /src
import Vacancies from '@/components/Vacancies.vue';
import Instagram from '@/components/Instagram.vue';
import Slider from '@/components/Slider.vue';
import Map from '@/components/Map.vue';



export default {
  name: 'Home',
  components: {
    Vacancies,
    Instagram,
    Slider,
    Map
  },
  metaInfo: {
      title: 'Test site for aic studo',
  }
  
}
</script>

