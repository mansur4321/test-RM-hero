import LStorage from "../API/LStorage";

let heroStorage = new LStorage();

const storage = {
    state() {
        return{
            infoPages: {},
        }
    },

    getters: {
        getfavoritesHeroes() {
            return heroStorage.getHeroList();
        }
    },

    mutations: {
        changeInfoPages(state, newInfo) {
            state.infoPages.prev = newInfo.prev;
            state.infoPages.next = newInfo.next;
        },
    },

    actions: {
        async getHeroRM({ commit }) {
            let resolve = await fetch('https://rickandmortyapi.com/api/character?page=2');
            resolve = await resolve.json('');

            commit('changeInfoPages', resolve.info);


            return resolve.results;
        },

        async changePage(context, action) {
            if (context.state.infoPages[action] === null) return false

            let urlString = context.state.infoPages[action];

            let resolve = await fetch(urlString);
            resolve = await resolve.json('');

            context.commit('changeInfoPages', resolve.info);


            return resolve.results;
        },

        addHeroInFavorites(context, heroObj) {
            heroStorage.addhero(heroObj);
        },
    }
}

export default storage