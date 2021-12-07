<template>
	<Layout>
		<h2 class="mb-8 text-4xl font-bold text-center capitalize">
			News Section : <span class="text-green-700">{{}}</span>
		</h2>
		<NewsList :posts="posts" />
	</Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import NewsList from "./components/NewsList.vue";

// import data from "./posts.json";

// import axios from "axios";

export default {
	components: {
		Layout,
		NewsList,
	},
	data() {
		return {};
	},
	// mounted() {
	// 	axios
	// 		.get(
	// 			"https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key"
	// 		)
	// 		.then((response) => (this.posts = response));
	// },
};
</script>

<style>
</style>
