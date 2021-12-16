<template>
	<div>
		<h1 class="text-3xl">Страница с рубриками</h1>
		<post-list />
	</div>
</template>

<script>
import PostList from "../components/PostList.vue";

export default {
	components: {
		PostList,
	},
};
</script>

<style lang="scss" scoped>
</style>
