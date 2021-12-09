<template>
	<div v-for="child in children" :key="child.id" class="p-2">
		<template v-if="child.children && child.children.length > 0">
			<template v-if="!on_off.includes(post.id)"> </template>
			<template v-else class="">
				<img
					v-on:click="OnOff(post.id)"
					src="../assets/arrow-down-s-line.svg"
					alt="icon"
				/>
				<post-item-children :children="child.children"></post-item-children>
			</template>
		</template>

		<div class="flex">
			<img
				class="inline-block"
				v-on:click="OnOff(post.id)"
				src="../assets/arrow-right-s-line.svg"
				alt="icon"
			/>
			<a class="font-bold" :href="`https://www.klerk.ru${child.url}`">
				{{ child.title }}
			</a>
			<span class="font-bold"> ({{ child.count }}) </span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		children: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
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
	},
};
</script>

<style scoped>
</style>
