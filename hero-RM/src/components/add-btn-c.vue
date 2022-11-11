<template>
    <button class="add-favorite-btn"
        @click="addHero"
    >
        Добавить в избранное
    </button>
</template>

<script>
export default {
    emits: [
        'addHeroInFavorites'
    ],

    methods: {
        addHero() {
            this.$emit('addHeroInFavorites');
        }
    }
}
</script>

<style>

</style>