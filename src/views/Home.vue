<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<rubric-item/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RubricItem from '@/components/RubricItem.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
		RubricItem,
  }
}
</script>
