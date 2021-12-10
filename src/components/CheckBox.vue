<template>
	<label class="flex items-center">
		<input v-model="checked" @change="onChange" class="mx-2" type="checkbox" />
		<h2 class="pl-2">{{ label }}</h2>
	</label>
</template>

<script>
export default {
	data() {
		return {
			checked: false,
		};
	},
	props: {
		label: "",
	},
	computed: {
		// isChecked() {
		// 	if (this.modelValue instanceof Array) {
		// 		return this.modelValue.includes(this.value);
		// 	}
		// 	// Note that `true-value` and `false-value` are camelCase in the JS
		// 	return this.modelValue === this.trueValue;
		// },
	},
	methods: {
		onChange() {
			// console.log(e);
			this.$emit("checkbox_change", this.checked);
		},
		// updateInput(event) {
		// 	let isChecked = event.target.checked;
		// 	if (this.modelValue instanceof Array) {
		// 		let newValue = [...this.modelValue];
		// 		if (isChecked) {
		// 		newValue.push(this.value);
		// 		} else {
		// 		newValue.splice(newValue.indexOf(this.value), 1);
		// 		}
		// 		this.$emit("change", newValue);
		// 	} else {
		// 		this.$emit("change", isChecked ? this.trueValue : this.falseValue);
		// 	}
		// },
	},
};
</script>

<style  scoped>
</style>
