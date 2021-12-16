<template>
	<div v-for="post in postsBuild" :key="post.id" class="p-2 pl-4">
		<div class="flex">
			<template v-if="post.children && post.children.length > 0">
				<span
					v-on:click="ShowHide(post.id)"
					:class="{
						hide: !show_hide.includes(post.id),
						show: show_hide.includes(post.id),
					}"
					class="arrow"
				></span>
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
			<post-item
				:posts="post.children"
				:checked="$store.state.count.data.includes(post.id)"
			></post-item>
		</div>
	</div>
</template>

<script scoped>
import mixins from "@/mixins";

export default {
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	mixins: [
		mixins.post_build,
		mixins.show_hide,
		mixins.count_change,
		mixins.count_numbers,
	],
};
</script>

<style scoped>
</style>
