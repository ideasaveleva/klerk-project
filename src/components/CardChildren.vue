<template>
	<!-- <div>{{ children[0].id }}</div> -->
	<div
		v-for="child in children"
		:key="child.id"
		class="
			bg-green-300
			w-96
			border-solid border-gray-400 border-2
			rounded-lg
			p-2
			m-2
		"
	>
		<div>{{ child.id }}</div>
		<div>{{ child.title }}</div>
		<div>{{ child.url }}</div>
		<div><strong>Количество:</strong> {{ child.count }}</div>
	</div>
</template>

<script>
export default {
	name: "card-children",
	props: {
		children: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
</style>