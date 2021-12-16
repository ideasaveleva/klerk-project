<template>
	<div v-for="child in childrenBuild" :key="child.id" class="p-2 pl-4">
		<div class="flex">
			<template v-if="child.children && child.children.length > 0">
				<span
					v-on:click="ShowHide(child.id)"
					:class="{
						hide: !show_hide.includes(child.id),
						show: show_hide.includes(child.id),
					}"
					class="arrow"
				></span>
			</template>
			<template v-else>
				<span class="child"></span>
			</template>

			<a class="font-bold pr-2" :href="`https://www.klerk.ru${child.url}`">
				{{ child.title }}
			</a>
			<span class="font-bold">
				{{ CountNumbers(child.count, child.children) }}
			</span>
			<label class="flex items-center">
				<input
					v-on:click="countChange(child)"
					class="mx-2"
					type="checkbox"
					:checked="$store.state.count.data.includes(child.id)"
				/>
				<h2 class="">Отметить</h2>
			</label>
		</div>
		<div v-if="show_hide.includes(child.id)">
			<post-item
				:children="child.children"
				:checked="$store.state.count.data.includes(child.id)"
			></post-item>
		</div>
	</div>
</template>

<script>
import _sumBy from "lodash/sumBy";
import _filter from "lodash/filter";

export default {
	props: {
		children: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			show_hide: [],
		};
	},
	methods: {
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
	computed: {
		childrenBuild() {
			return _filter(this.children, (e) => {
				if (!this.$store.state.check.checked) {
					if (e.children && e.children.length > 0) {
						return e;
					} else if (!e.children) {
						return e;
					} else {
						if (this.$store.state.count.data.includes(e.id)) {
							this.$store.dispatch("count/countChange", {
								id: e.id,
								count: e.count,
							});
						}
					}
				} else {
					return e;
				}
			});
		},
	},
};
</script>

<style scoped>
</style>
