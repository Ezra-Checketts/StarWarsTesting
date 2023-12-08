import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class DatabankFilmPage extends BasePage {
    // Selectors:
    get films() {return $('[href="https://www.starwars.com/films"]');}
    get browseFilms() {return $('//h2/span[@class="title-text"]');}
    get phantomMenace() {return $('[alt="Star Wars: The Phantom Menace (Episode I)"]');}
    get battleDroid() {return $('[alt="Battle Droid"]');}

    // Functions:
    async selectFilms() {
        await super.openStarWars();
        await this.films.waitForClickable();
        await this.films.click();
        await expect(this.browseFilms).toExist();
    }

    async selectSWEp1() {
        await this.selectFilms();
        await this.phantomMenace.waitForClickable();
        await this.phantomMenace.click();
    }

    async selectBattleDroid() {
        await this.selectSWEp1();
        await this.battleDroid.waitForClickable();
        await this.battleDroid.click();
    }
}

export default new DatabankFilmPage();