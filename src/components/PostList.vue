<template>
	<div class="pt-4">
		<check-box
			class="mb-4"
			:label="label"
			v-on:checkbox_change="changeInput($event)"
		/>
		<post-item :posts="posts" :checked="checked"></post-item>
	</div>
</template>

<script>
import PostItem from "./PostItem";
import posts from "@/app.js";
import CheckBox from "./CheckBox.vue";

export default {
	components: {
		PostItem,
		CheckBox,
	},
	data() {
		return {
			posts: posts,
			label: "Отображать пустые рубрики",
			checked: false,
		};
	},
	methods: {
		changeInput(checked) {
			this.checked = checked;
		},
	},
};
</script>

<style>
</style>
