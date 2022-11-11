<template>
  <div class="w-full">
	<header class="w-full bg-sky-400 h-12 p-6">
		<nav class="w-full h-full">
			<ul class="flex items-center h-full text-lg text-white">
				<li class="inline-block mr-5 pb-1 duration-100"
					:class="{
						'_active': activePage
					}"
				>
					<router-link  to="/">
						Список
					</router-link >
				</li>

				<li class="pb-1 duration-100"
					:class="{
						'_active': !activePage
					}"
				>
					<router-link  to="/favorites">
						Избранное
					</router-link>
				</li>
			</ul>
		</nav>
	</header>

    <router-view />
  </div>
</template>

<script lang="js">
import { RouterLink, RouterView } from "vue-router";

export default {
	name: 'app',

	computed: {//Страницы всего две, поэтому таким способом думаю одну из кнопок активной
		activePage() {
			return this.$route.path === '/';
		}
	}
}

</script>

<style>

</style>
