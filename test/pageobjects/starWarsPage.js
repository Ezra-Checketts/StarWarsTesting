import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class StarWarsPage extends BasePage {
    // Selectors:
    get search() {return $('.search-title');}
    get searchField() {return $('//div[@class="input-group search-field"]/input[@name="q"]');}
    get enterSearch() {return $('[class="input-group search-field"] > [class="search-button ada-el-focus aw-independent"]');}
    get films() {return $('[href="https://www.starwars.com/films"]');}
    get browseFilms() {return $('//h2/span[@class="title-text"]');}
    get databank() {return $('//span[text()="DATABANK"]');}

    // Functions:
    openStarWars () {
        return super.openUrl('https://starwars.com/', '');
    }

    async searchFor(input) {
        await this.openStarWars();
        await this.search.click();
        await this.searchField.setValue(input);
        await this.enterSearch.click();
    }

    async selectFilms() {
        await this.openStarWars();
        await this.films.click();
        await expect(this.browseFilms).toExist();
    }

    async selectDatabank() {
        await this.openStarWars();
        await this.databank.click();
    }
}

export default new StarWarsPage();
