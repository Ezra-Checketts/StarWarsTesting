import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class DatabankFilmPage extends BasePage {
    // Selectors:
    get films() {return $('[href="https://www.starwars.com/films"]');}
    get browseFilms() {return $('h2 > span.title-text');}
    get phantomMenace() {return $('[alt="Star Wars: The Phantom Menace (Episode I)"]');}
    get battleDroid() {return $('[alt="Battle Droid"]');}

    // Functions:
    // Opens the Star Wars Films page and waits for the Browse Films element to exist
    async selectFilms() {
        try {
            const filmsElement = this.films
            const browseFilmsElement = this.browseFilms
            await super.openStarWars();
            await super.waitForClickableAndClick(filmsElement);
            await browseFilmsElement.waitForExist();
        } catch (error) {
            await super.handleError('selectFilms', error);
        }
    }

    // Selects Star Wars: The Phantom Menace from the Films page
    async selectPhantomMenace() {
        try {
            const phantomMenaceElement = this.phantomMenace
            await this.selectFilms();
            await super.waitForClickableAndClick(phantomMenaceElement);
        } catch (error) {
            await super.handleError('selectPhantomMenace', error);
        }
    }

    // Selects Battle Droid from the Phantom Menace page
    async selectBattleDroid() {
        try {
            const battleDroidElement = this.battleDroid
            await this.selectPhantomMenace();
            await super.waitForClickableAndClick(battleDroidElement);
        } catch (error) {
            await super.handleError('selectBattleDroids', error);
        }
    }
}

export default new DatabankFilmPage();