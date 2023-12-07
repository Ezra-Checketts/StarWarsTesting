import { $ } from '@wdio/globals';
import StarWarsPage from './starWarsPage.js';

class CloneWarsPage extends StarWarsPage {
    // Selectors:
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
    async selectCloneWars() {
        await super.searchFor('clone wars');
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

export default new CloneWarsPage();
