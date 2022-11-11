<template>
  <div class="card">
    <div class="card__main">
        <img :src="heroInformation.image" class="card__img">

        <div class="card__wrapper-inf">
            <div class="card__text-wrapper">
                <p class="card__title">
                    name:
                </p>
                
                <p class="card__text">
                    {{heroInformation.name}}
                </p>
            </div>

            <div class="card__text-wrapper">
                <p class="card__title">
                    gender:
                </p>
                
                <p class="card__text">
                    {{heroInformation.gender}}
                </p>
            </div>

            <div class="card__text-wrapper">
                <p class="card__title">
                    origin:
                </p>
                
                <p class="card__text">
                    {{heroInformation.origin.name}}
                </p>
            </div>
        </div>
    </div>

    <div class="w-full px-[15px] flex justify-center"
        v-if="btnView"
    >
        <add-btn-c
            @addHeroInFavorites="addHeroInFavorites"
        />
    </div>
  </div>
</template>

<script>
import addBtnC from './add-btn-c.vue';

export default {
  components: { addBtnC },
    props: {
        heroInformation: Object,
        btnView: Boolean,
    },

    methods: {
        addHeroInFavorites() {
            this.$store.dispatch('addHeroInFavorites', this.heroInformation);
        }
    }
}
</script>

<style>

</style>