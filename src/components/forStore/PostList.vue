<template>
	<div class="pt-4">
		<label class="flex items-center mb-4">
			<input v-on:click="checkChange()" class="mr-2" type="checkbox" />
			<h3 class="">Отображать пустые рубрики</h3>
		</label>
		<h2 class="pb-2 text-xl">
			Суммa отмеченных элементов: {{ $store.state.count.count }}
		</h2>
		<div v-for="post in $store.getters.postBuild" :key="post.id" class="p-2">
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
					<h2 class="">Отметить</h2>
				</label>
			</div>
			<div v-if="show_hide.includes(post.id)">
				<post-item :children="post.children"></post-item>
			</div>
		</div>
	</div>
</template>

<script>
import PostItem from "@/components/forStore/PostItem";

import _sumBy from "lodash/sumBy";

export default {
	components: {
		PostItem,
	},
	data() {
		return {
			checked_item: false,
			show_hide: [1],
		};
	},
	methods: {
		checkChange() {
			this.$store.dispatch("check/checkChange");
		},
		ShowHide(id) {
			if (!this.show_hide.includes(id)) {
				this.show_hide.push(id);
			} else {
				let index = this.show_hide.indexOf(id);
				this.show_hide.splice(index, 1);
			}
		},
		CountNumbers(count, children) {
			let string = "";
			let childrenCount = _sumBy(children, (e) => {
				if (this.$store.state.check.checked) {
					return e.count;
				} else {
					if (e.children && e.children.length > 0) {
						return e.count;
					}
					if (!e.children) {
						return e.count;
					}
				}
			});
			string = childrenCount
				? "(" + count + ", " + childrenCount + ")"
				: "(" + count + ")";
			return string;
		},
		countChange(item) {
			this.$store.dispatch("count/countChange", {
				id: item.id,
				count: item.count,
			});
		},
	},
};
</script>

<style scoped>
</style>
