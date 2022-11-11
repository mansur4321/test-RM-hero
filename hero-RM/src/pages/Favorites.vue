<template>
  	<div class="pt-10 flex justify-start">
		<div class="loader"
			v-if="!check"
		>
			please wait for data loading
		</div>

		<div class="flex flex-wrap"
			v-if="check"
		>
			<pers-card-c
				v-for="hero of favoritesHeroesList"
				:key="hero.id"
				:heroInformation="hero"
				:btnView="false"
			>
			</pers-card-c>
		</div>
	</div>
</template>

<script>
import persCardC from '../components/pers-card-c.vue';

export default {
	components: {
		persCardC,
	},

	data() {
		return {
			favoritesHeroesList: [],
			check: false,
		}
	},

	mounted() {
		this.check = false;
		this.favoritesHeroesList = this.$store.getters.getfavoritesHeroes;
		this.check = true;
	}
}
</script>

<style>

</style>