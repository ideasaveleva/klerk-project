<template>
	<Layout>
		<a
			href="https://www.klerk.ru/"
			class="mb-8 text-4xl font-bold text-center capitalize block"
			>Klerk.ru:</a
		>
		<router-view></router-view>
	</Layout>
</template>

<script>
import Layout from "@/layout/Layout";

export default {
	components: {
		Layout,
	},
};
</script>

<style>
a:hover {
	color: rgb(233, 101, 24);
}

label {
	user-select: none;
}

.arrow {
	width: 24px;
	height: 24px;
}

.hide {
	background: url("./assets/arrow-right-s-line.png");
	background-repeat: no-repeat;
}

.show {
	background: url("./assets/arrow-down-s-line.png");
	background-repeat: no-repeat;
}

.child {
	position: relative;
	width: 24px;
	height: 24px;
}

.child::before {
	content: "";
	width: 5px;
	height: 5px;
	background: #064e3b;
	border-radius: 50%;
	position: absolute;
	top: 10px;
	left: 10px;
}
</style>
