<template>
	<header class="flex justify-center py-6 bg-green-900 place-items-center">
		<img alt="Vue logo" src="../assets/logo.png" width="32" />
		<a
			@click="$router.push('/')"
			class="ml-4 text-lg font-bold text-green-100 md:text-xl"
		>
			Vue Rubrics
		</a>
		<a
			class="ml-8 text-lg font-bold text-green-100 md:text-xl"
			@click="$router.push('/store')"
		>
			Store
		</a>
		<a
			class="ml-8 text-lg font-bold text-green-100 md:text-xl"
			@click="$router.push('/task')"
		>
			Тестовое задание
		</a>
	</header>
</template>
