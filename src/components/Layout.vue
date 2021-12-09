<template>
	<Header />
	<main class="container flex-grow mx-auto my-8">
		<slot />
	</main>
	<Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>