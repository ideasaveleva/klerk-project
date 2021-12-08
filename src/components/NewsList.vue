<template>
	<div class="">
		<news-card :posts="posts" />
	</div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
import posts from "@/app";

export default {
	components: {
		NewsCard,
	},
	data() {
		return {
			posts: posts,
		};
	},

	mounted() {
		console.log(posts);
	},
};
</script>
