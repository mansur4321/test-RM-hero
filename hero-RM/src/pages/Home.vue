<template>
	<div class="pt-10 flex justify-start flex-col">
		<loader-c
			v-if="!check"
		/>

		<div class="w-full mb-5 ">
			<input v-model="filterText" type="text" class="mr-3 ml-8 px-2 py-1 border-2" placeholder="Фильтр по гендеру">
		</div>

		<div class="btn-wrapper">
			<button-c
				:text="'back'"
				@click="backPage"
			/>

			<button-c
				:text="'next'"
				@click="nextPage"
			/>
		</div>

		<div class="flex flex-wrap"
			v-if="check"
		>
			<pers-card-c
				v-for="hero of currList"
				:key="hero.id"
				:heroInformation="hero"
				:btnView="true"
			>
			</pers-card-c>
		</div>
	</div>
</template>

<script>
import ButtonC from '../components/button-c.vue';
import LoaderC from '../components/loader-c.vue';
import persCardC from '../components/pers-card-c.vue';


export default {
  components: { persCardC, LoaderC, ButtonC },
	data() {
		return {
			heroList: [],
			check: false,

			filterText: '',
		}
	},

    async mounted() {
		this.check = false;
        this.heroList =  await this.$store.dispatch('getHeroRM');

		this.check = true;
    },

	computed: {
		currList() {
			if(this.filterText === '') {
				return this.heroList;
			} else {
				return this.heroList.filter(hero => hero.gender.includes(this.filterText));
			}
		}
	},

	methods: {
		async backPage() {
			this.check = false;
			let heroList =  await this.$store.dispatch('changePage', 'prev');

			if(heroList) {
				this.heroList = heroList;
			}


			this.check = true;
		},

		async nextPage() {
			this.check = false;
			let heroList =  await this.$store.dispatch('changePage', 'next');

			if(heroList) {
				this.heroList = heroList;
			}

			
			this.check = true;
		}
	}
}
</script>

<style>

</style>