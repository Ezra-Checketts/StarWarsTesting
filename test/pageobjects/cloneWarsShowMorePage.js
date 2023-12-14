import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class HiddenCloneWarsPage extends BasePage {
    // Selectors:
    get search() {return $('.search-title');}
    get searchField() {return $('.input-group.search-field input[name="q"]');}
    get enterSearch() {return $('[class="input-group search-field"] > [class="search-button ada-el-focus aw-independent"]');}
    get cloneWars() {return $('.title-link[href="https://www.starwars.com/series/star-wars-the-clone-wars"]');}
    get showMore() {return $('//section[@id="ref-1-6"]//span[contains(text(), "Show More")]');}
    cloneWarsSeason(seasonNumber) {
        return $(`[data-title="Season ${seasonNumber}"]`);
    }
    cloneWarsEpisode(episodeName) {
        return $(`//*[contains(text(), "${episodeName}")]`);
    }

    // Functions:
    // Performs a search on the Star Wars website
    async performSearch(input) {
        try {
            const searchElement = this.search
            const searchFieldElement = this.searchField
            const enterSearchElement = this.enterSearch
            await super.openStarWars();
            await super.waitForClickableAndClick(searchElement);
            await searchFieldElement.setValue(input);
            await super.waitForClickableAndClick(enterSearchElement);
        } catch (error) {
            await super.handleError('performSearch', error);
        }
    }

    // Selects Star Wars: The Clone Wars from search results
    async selectCloneWars() {
        try {
            const cloneWarsElement = this.cloneWars
            await this.performSearch('clone wars');
            await super.waitForClickableAndClick(cloneWarsElement);
        } catch (error) {
            await super.handleError('selectCloneWars', error);
        }
    }

    // Selects a Clone Wars Season from the Clone Wars Page
    async selectCloneWarsSeason(seasonNumber) {
        try {
            const seasonElement = this.cloneWarsSeason(seasonNumber);
            await this.selectCloneWars();
            await super.waitForClickableAndClick(seasonElement);
        } catch (error) {
            await super.handleError('selectCloneWarsSeason', error);
        }
    }

    // Selects the Show More button to show more Clone Wars episode guides
    async selectShowMore(seasonNumber) {
        try {
            const showMoreElement = this.showMore
            await this.selectCloneWarsSeason(seasonNumber);
            await super.waitForClickableAndClick(showMoreElement);
        } catch (error) {
            await super.handleError('selectShowMore', error);
        }
    }

    // Selects the Show More button twice to show more Clone Wars episode guides
    async selectAdditionalShowMore(seasonNumber) {
        try {
            const showMoreElement = this.showMore
            await this.selectCloneWarsSeason(seasonNumber);
            await super.waitForClickableAndClick(showMoreElement);
            await super.waitForClickableAndClick(showMoreElement);
        } catch (error) {
            await super.handleError('selectShowMore', error);
        }
    }

    // Selects a hidden Clone Wars episode guide from a selected season 
    async selectHiddenCloneWarsEpisode(seasonNumber,episodeName) {
        try {
            const cloneWarsEpisodeElement = this.cloneWarsEpisode(episodeName);
            await this.selectShowMore(seasonNumber);
            await super.waitForClickableAndClick(cloneWarsEpisodeElement);
        } catch (error) {
            await super.handleError('selectCloneWarsEpisode', error);
        }
    }

    async selectAdditionalHiddenCloneWarsEpisode(seasonNumber,episodeName) {
        try {
            const cloneWarsEpisodeElement = this.cloneWarsEpisode(episodeName);
            await this.selectAdditionalShowMore(seasonNumber);
            await super.waitForClickableAndClick(cloneWarsEpisodeElement);
        } catch (error) {
            await super.handleError('selectAdditionalHiddenCloneWarsEpisode', error);
        }
    }
}

export default new HiddenCloneWarsPage();