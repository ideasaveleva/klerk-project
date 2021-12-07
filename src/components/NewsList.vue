<template>
	<div
		class="
			grid grid-cols-1
			gap-6
			mt-4
			md:grid-cols-2
			lg:grid-cols-3
			2xl:grid-cols-4
			justify-items-center
		"
	>
		<!-- <NewsCard v-for="(post, index) in posts" :key="index" :post="post" /> -->

		<ul>
			<li v-for="post in posts" :key="post.id"></li>
			<li>{{ post.title }}</li>
			<li>{{ post.url }}</li>
			<li>{{ post.children }}</li>
		</ul>
	</div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
// import { posts } from "./posts.json";
import rubrics from "../app";

export default {
	components: {
		NewsCard,
	},
	// props: ["posts"],

	data() {
		return {
			post: {
				id: "",
				title: "",
				url: "",
				children: [],
			},
			// rubrics,
		};
	},

	mounted() {
		console.log(rubrics);
	},
};
</script>