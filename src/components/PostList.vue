<template>
	<div class="pt-8">
		<post-item :posts="posts"></post-item>
	</div>
</template>

<script>
import PostItem from "@/components/PostItem";
import posts from "@/app.js";

export default {
	components: {
		PostItem,
	},
	data() {
		return {
			posts: posts,
		};
	},
};
</script>



<style>
</style>
