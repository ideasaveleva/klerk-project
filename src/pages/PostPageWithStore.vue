<template>
	<div>
		<h1 class="text-3xl">Страница с рубриками c помощью store</h1>
		<post-list />
	</div>
</template>

<script>
import PostList from "@/components/forStore/PostList";

export default {
	components: {
		PostList,
	},
};
</script>

<style lang="scss" scoped>
</style>
