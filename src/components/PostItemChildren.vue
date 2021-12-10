<template>
	<div v-for="child in children" :key="child.id" class="p-2">
		<div class="flex">
			<template v-if="child.children && child.children.length > 0">
				<template v-if="!on_off.includes(child.id)">
					<img
						class="inline-block"
						v-on:click="OnOff(child.id)"
						src="../assets/arrow-right-s-line.svg"
						alt="icon"
					/>
				</template>
				<template v-else>
					<img
						v-on:click="OnOff(child.id)"
						src="../assets/arrow-down-s-line.svg"
						alt="icon"
					/>
				</template>
			</template>
			<a class="font-bold pr-2" :href="`https://www.klerk.ru${child.url}`">
				{{ child.title }}
			</a>
			<span class="font-bold">
				(
				{{ child.count }}
				<template v-if="child.children && child.children.length > 0">
					, {{ CountNumbers(child.count, child.children) }}
				</template>
				)
			</span>
			<check-box :label="label" />
		</div>
		<div v-if="on_off.includes(child.id)">
			<post-item-children :children="child.children"></post-item-children>
		</div>
	</div>
</template>

<script>
import _sumBy from "lodash/sumBy";
import CheckBox from "./CheckBox.vue";

export default {
	components: { CheckBox },
	props: {
		children: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			label: "",
			on_off: [],
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
};
</script>

<style scoped>
</style>
