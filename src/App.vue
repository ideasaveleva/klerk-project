<template>
	<Layout>
		<h2 class="mb-8 text-4xl font-bold text-center capitalize">
			Klerk.ru : <span class="text-green-700">{{}}</span>
		</h2>
		<CheckBox />
		<h2 class="pl-7">Отображать пустые рубрики</h2>
		<PostList />
	</Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import PostList from "./components/PostList.vue";
import CheckBox from "./components/CheckBox.vue";

export default {
	components: {
		Layout,
		PostList,
		CheckBox,
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
