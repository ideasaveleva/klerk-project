<template>
	<Layout>
		<h2 class="mb-8 text-4xl font-bold text-center capitalize">
			News Section : <span class="text-green-700">{{ section }}</span>
		</h2>
		<NewsFilter v-model="section" />
		<NewsList :posts="posts" />
	</Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import NewsFilter from "./components/NewsFilter.vue";
import NewsList from "./components/NewsList.vue";

import data from "./posts.json";

import axios from "axios";

export default {
	components: {
		Layout,
		NewsFilter,
		NewsList,
	},
	data() {
		return {
			section: "home",
			posts: null,
		};
	},
	mounted() {
		axios
			.get(
				"https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key"
			)
			.then((response) => (this.posts = response));
	},
};
</script>

<style>
</style>
