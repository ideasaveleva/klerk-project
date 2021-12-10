<template>
	<Layout>
		<h2 class="mb-8 text-4xl font-bold text-center capitalize">
			Klerk.ru : <span class="text-green-700">{{}}</span>
		</h2>
		<PostList />
	</Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import PostList from "./components/PostList.vue";

export default {
	components: {
		Layout,
		PostList,
	},
	data() {
		return {};
	},
};
</script>

<style>
a:hover {
	color: brown;
}
</style>
