<template>
	<Header />
	<main class="container flex-grow mx-auto my-8 px-4">
		<slot />
	</main>
	<Footer />
</template>

<script>
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>