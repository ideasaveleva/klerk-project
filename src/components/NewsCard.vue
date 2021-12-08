<template>
	<div class="p-4 rounded-lg shadow-lg bg-gray-50">
		<div
			v-for="post in posts"
			:key="post.id"
			class="
				post
				bg-gray-300
				m-8
				border-solid border-black border-2
				rounded-lg
				w-96
				p-4
			"
		>
			<div>{{ post.id }}</div>
			<a class="font-bold" :href="`https://www.klerk.ru${post.url}`">{{
				post.title
			}}</a>
			<div class="font-bold">Количество: {{ post.count }}</div>
			<div class="font-bold pr-2">
				Документы:

				<template v-if="post.children.length > 0">
					<tempalte v-if="!on_off.includes(post.id)">
						<div v-on:click="OnOff(post.id)" class="text-blue-600">
							<img src="../assets/file-add-line.svg" alt="icon" />
						</div>
					</tempalte>
					<tempalte v-else>
						<div v-on:click="OnOff(post.id)" class="text-green-600">
							<img src="../assets/file-reduce-line.svg" alt="icon" />
						</div>
						<card-children :children="post.children"></card-children>
					</tempalte>
				</template>
				<tempalte v-else>
					<h2 class="text-red-600">Список пуст</h2>
				</tempalte>
			</div>
		</div>
	</div>
	<!-- <div class="post__btns">

<my-button @click="$router.push(`/posts/${post.id}`)" class="btn"

>Открыть</my-button

>

<my-button @click="$emit('remove', post)" class="btn"

>Удалить</my-button

>

</div> -->
</template>

<script>
// import { format } from "date-fns";
import CardChildren from "@/components/CardChildren";

export default {
	components: {
		CardChildren,
	},
	props: {
		posts: {
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
