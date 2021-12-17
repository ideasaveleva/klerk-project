<template>
	<div class="pt-4">
		<label class="flex items-center mb-4">
			<input v-on:click="checkChange()" class="mr-2" type="checkbox" />
			<h3 class="">Отображать пустые рубрики</h3>
		</label>
		<h2 class="pb-2 text-xl">
			Суммa отмеченных элементов: {{ $store.state.count.count }}
		</h2>
		<div v-for="post in postsBuild" :key="post.id" class="p-2">
			<div class="flex">
				<template v-if="post.children && post.children.length > 0">
					<i
						v-on:click="ShowHide(post.id)"
						:class="{
							'ri-arrow-right-s-line': !show_hide.includes(post.id),
							'ri-arrow-down-s-line': show_hide.includes(post.id),
						}"
						class="arrow"
					></i>
				</template>
				<template v-else>
					<span class="child"></span>
				</template>

				<a class="font-bold pr-2" :href="`https://www.klerk.ru${post.url}`">
					{{ post.title }}
				</a>
				<span class="font-bold">
					{{ CountNumbers(post.count, post.children) }}
				</span>
				<label class="flex items-center">
					<input
						v-on:click="countChange(post)"
						class="mx-2"
						type="checkbox"
						:checked="$store.state.count.data.includes(post.id)"
					/>
				</label>
			</div>
			<div v-if="show_hide.includes(post.id)">
				<post-item :posts="post.children"></post-item>
			</div>
		</div>
	</div>
</template>

<script scoped>
import PostItem from "@/components/PostItem";
import posts from "@/app.js";

import mixins from "@/mixins";

export default {
	components: {
		PostItem,
	},
	mixins: [
		mixins.post_build,
		mixins.show_hide,
		mixins.count_change,
		mixins.count_numbers,
		mixins.check_change,
	],
	data() {
		return {
			posts: posts,
		};
	},
	mounted() {
		// console.log(mixins);
	},
};
</script>

<style scoped>
</style>
