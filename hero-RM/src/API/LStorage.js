export default class LStorage {
    _ls = window.localStorage;
    _nameLocation = 'listHero';

    constructor() {
        this._ls.setItem(this._nameLocation, []);
    }

    checkHero(id) {        
        let listHeroFull = JSON.parse(this._ls.getItem(this._nameLocation));
        let checkHeroes = listHeroFull.find(heroes => heroes.id === id);

        return checkHeroes === undefined
    }

    addhero(hero) {
        if (this._ls.getItem(this._nameLocation) == '') {
            let listHeroFull = [hero];
            this._ls.setItem(this._nameLocation, JSON.stringify(listHeroFull));
            
            return
        }


        if (!this.checkHero(hero.id)) return;

        let listHeroFull = JSON.parse(this._ls.getItem(this._nameLocation));
        listHeroFull.push(hero);

        this._ls.setItem(this._nameLocation, JSON.stringify(listHeroFull));
    }

    getHeroList() {
        if (this._ls.getItem(this._nameLocation) == '') return false;

        let listFavoritesHero = JSON.parse(this._ls.getItem(this._nameLocation));
        console.log(listFavoritesHero)
        return listFavoritesHero;
    }
}