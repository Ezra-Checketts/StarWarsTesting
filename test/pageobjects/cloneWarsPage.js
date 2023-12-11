import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class CloneWarsPage extends BasePage {
    // Selectors:
    get search() {return $('.search-title');}
    get searchField() {return $('.input-group.search-field input[name="q"]');}
    get enterSearch() {return $('.input-group.search-field .search-button.ada-el-focus.aw-independent');}
    get cloneWars() {return $('.title-link[href="https://www.starwars.com/series/star-wars-the-clone-wars"]');}
    get cloneWarsS1() {return $('[data-title="Season 1"]');}
    cloneWarsSeason(number) {
        return $(`[data-title="Season ${number}"]`);
    }
    cloneWarsEp(episode) {
        return $(`//*[contains(text(), "${episode}")]`);
    }

    // Functions:

    async performSearch(input) {
        await super.openStarWars();
        await this.search.waitForClickable();
        await this.search.click();
        await this.searchField.setValue(input);
        await this.enterSearch.waitForClickable();
        await this.enterSearch.click();
    }

    async selectCloneWars() {
        await this.performSearch('clone wars');
        await this.cloneWars.waitForClickable();
        await this.cloneWars.click();
    }

    async selectCloneWarsSeason(season) {
        await this.selectCloneWars();
        await this.cloneWarsSeason(season).click();
    }

    async selectCloneWarsEp(season,episode) {
        await this.selectCloneWarsSeason(season);
        await this.cloneWarsEp(episode).click();
    }
}

export default new CloneWarsPage();