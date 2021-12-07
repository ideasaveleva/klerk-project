<template>
	<section class="p-4 rounded-lg shadow-lg bg-gray-50 w-80">
		<div class="h-96">
			<a
				class="
					text-xl
					font-bold
					text-center text-green-800
					hover:text-green-600 hover:underline
				"
				:href="post.url"
				target="_blank"
				rel="noreferrer"
			>
				{{ post.id }}
			</a>
			<span
				class="
					text-xl
					font-bold
					text-center text-green-800
					hover:text-green-600 hover:underline
				"
			>
				{{ post.title }}
			</span>
			<span
				class="
					text-xl
					font-bold
					text-center text-green-800
					hover:text-green-600 hover:underline
				"
			>
				{{ post.count }}
			</span>
		</div>
		<div>
			<span
				class="
					text-xl
					font-bold
					text-center text-green-800
					hover:text-green-600 hover:underline
				"
			>
				{{ post.children }}
			</span>
		</div>
	</section>
</template>

<script>
// import { format } from "date-fns";

export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	methods: {},
};
</script>