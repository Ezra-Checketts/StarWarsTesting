import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class DatabankPage extends BasePage {
    // Selectors:
    get databank() {return $('//span[text()="DATABANK"]');}
    get databankSearch() {return $('#searchField_SRP');}
    get databankSearchEnter() {return $('[value="Search"]');}
    get databank501stLegion() {return $('.title-link[href="https://www.starwars.com/databank/501st-legion"]');}
    get text501stLegion() {return $('//*[@class="long-title"][contains(text(), "501st Legion")]');}

    // Functions:
    // Opens the Databank page
    async selectDatabank() {
        try {
            const databankElement = this.databank
            await super.openStarWars();
            await super.waitForClickableAndClick(databankElement);
        } catch (error) {
            await super.handleError('selectDatabank', error);
        }
    }

    // Enters a query into the Databank search field
    async searchDatabank(query) {
        try {
            const databankSearchElement = this.databankSearch
            const databankSearchEnterElement = this.databankSearchEnter
            await this.selectDatabank();
            await databankSearchElement.setValue(query);
            await super.waitForClickableAndClick(databankSearchEnterElement);
        } catch (error) {
            await super.handleError('searchDatabank', error);
        }
    }

    // Selects the 501st Legion page from databank search results
    async select501stLegion() {
        try {
            const databank501stLegionElement = this.databank501stLegion
            const text501stLegionElement = this.text501stLegion
            await this.searchDatabank('501');
            await super.waitForClickableAndClick(databank501stLegionElement);
            await text501stLegionElement.waitForExist();
        } catch (error) {
            await super.handleError('select501stLegion', error);
        }
    }
}

export default new DatabankPage();