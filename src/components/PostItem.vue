<template>
	<div v-for="post in posts" :key="post.id" class="">
		<div class="flex">
			<!-- <template v-if="!checked"> -->

			<template v-if="post.children && post.children.length > 0">
				<template v-if="!on_off.includes(post.id)">
					<img
						class="inline-block"
						v-on:click="OnOff(post.id)"
						src="../assets/arrow-right-s-line.svg"
						alt="icon"
					/>
				</template>
				<template v-else>
					<img
						v-on:click="OnOff(post.id)"
						src="../assets/arrow-down-s-line.svg"
						alt="icon"
					/>
				</template>
			</template>

			<a class="font-bold pr-2" :href="`https://www.klerk.ru${post.url}`">
				{{ post.title }}
			</a>
			<span class="font-bold">
				(
				{{ post.count }}
				<template v-if="post.children && post.children.length > 0">
					, {{ CountNumbers(post.count, post.children) }}
				</template>
				)
			</span>
			<check-box :label="label" class="" />
		</div>
		<div v-if="on_off.includes(post.id) && !checked">
			<post-item-children :children="post.children"></post-item-children>
		</div>
	</div>
</template>

<script>
import _sumBy from "lodash/sumBy";
import PostItemChildren from "@/components/PostItemChildren";
import CheckBox from "./CheckBox.vue";

export default {
	components: {
		PostItemChildren,
		CheckBox,
	},
	props: {
		posts: {
			type: Array,
			required: true,
		},
		checked: false,
	},
	data() {
		return {
			label: "Суммa отмеченных элементов",
			on_off: [1],
		};
	},
	methods: {
		OnOff(id) {
			if (!this.on_off.includes(id)) {
				this.on_off.push(id);
			} else {
				let index = this.on_off.indexOf(id);
				this.on_off.splice(index, 1);
			}
		},
		CountNumbers(count, children) {
			let childrenCount = _sumBy(children, "count");
			return count + childrenCount;
		},
	},
	mounted() {
		console.log(this.posts);
	},
};
</script>

<style scoped>
</style>
