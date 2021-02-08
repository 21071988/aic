<template>
  <div class="home">
    <Vacancies/>

  </div>
</template>

<script>
// @ is an alias to /src
import Vacancies from '@/components/Vacancies.vue'

export default {
  name: 'Home',
  components: {
    Vacancies
  }
}
</script>
