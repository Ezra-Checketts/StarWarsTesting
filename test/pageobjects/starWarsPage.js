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
    get phantomMenace() {return $('[alt="Star Wars: The Phantom Menace (Episode I)"]');}
    get battleDroid() {return $('[alt="Battle Droid"]');}
    get databankSearch() {return $('#searchField_SRP');}
    get databankSearchEnter() {return $('[value="Search"]');}
    get databank501stLegion() {return $('.title-link[href="https://www.starwars.com/databank/501st-legion"]');}
    get page501stLegion() {return $('//*[@class="long-title"][contains(text(), "501st Legion")]');}
    get cloneWars() {return $('.title-link[href="https://www.starwars.com/series/star-wars-the-clone-wars"]');}
    get cloneWarsS1() {return $('[data-title="Season 1"]');}
    get showMore() {return $('//section[@id="ref-1-6"]//span[contains(text(), "Show More")]');}
    cloneWarsSeason(number) {
        return $(`[data-title="Season ${number}"]`);
    }
    cloneWarsEp(episode) {
        return $(`//*[contains(text(), "${episode}")]`);
    }

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

    async selectSWEp1() {
        await this.selectFilms();
        await this.phantomMenace.click();
    }

    async selectBattleDroid() {
        await this.selectSWEp1();
        await this.battleDroid.click();
    }

    async searchDatabank(query) {
        await this.selectDatabank();
        await this.databankSearch.setValue(query);
        await this.databankSearchEnter.click();
    }

    async select501stLegion() {
        await this.searchDatabank('501');
        await this.databank501stLegion.click();
        await expect(this.page501stLegion).toExist();
    }

    async selectCloneWars() {
        await this.searchFor('clone wars');
        await this.cloneWars.click();
    }

    async selectCloneWarsSeason(season) {
        await this.selectCloneWars();
        await this.cloneWarsSeason(season).click();
    }

    async selectShowMore(season) {
        await this.selectCloneWarsSeason(season);
        await this.showMore.waitForClickable({timeout:2000});
        await this.showMore.click();
    }

    async selectHiddenCloneWarsEp(season,episode) {
        await this.selectShowMore(season);
        await this.cloneWarsEp(episode).click();
    }

    async selectCloneWarsEp(season,episode) {
        await this.selectCloneWarsSeason(season);
        await this.cloneWarsEp(episode).click();
    }
}

export default new StarWarsPage();
