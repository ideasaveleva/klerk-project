<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
		<!-- {{rubrics}}
		<ul>
			<li v-for="rubric in rubrics">Рубричка {{rubric.RubricId}}</li>
		</ul> -->
  </div>
  <router-view/>
</template>





<script>
	// export default {
	// 	data() {
  //   return {
  //     rubrics: []
  //   }
  // },
  // created() {
  //   const url = 'https://www.klerk.ru/yindex.php/v3/event/rubrics';
  //   this.$http.get(url).then(data => {
  //     const items = JSON.parse(data.response).Items
  //     items.map(item => {
  //       // push to the projects array to make sure Vue's reactivity works
  //       this.rubrics.push(item)
  //     })
  //   })
  // }

	// }
</script>







<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
