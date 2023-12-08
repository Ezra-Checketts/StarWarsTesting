import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class DatabankPage extends BasePage {
    // Selectors:
    get databank() {return $('//span[text()="DATABANK"]');}
    get databankSearch() {return $('#searchField_SRP');}
    get databankSearchEnter() {return $('[value="Search"]');}
    get databank501stLegion() {return $('.title-link[href="https://www.starwars.com/databank/501st-legion"]');}
    get page501stLegion() {return $('//*[@class="long-title"][contains(text(), "501st Legion")]');}

    // Functions:
    async selectDatabank() {
        await super.openStarWars();
        await this.databank.waitForClickable();
        await this.databank.click();
    }

    async searchDatabank(query) {
        await this.selectDatabank();
        await this.databankSearch.setValue(query);
        await this.databankSearchEnter.waitForClickable();
        await this.databankSearchEnter.click();
    }

    async select501stLegion() {
        await this.searchDatabank('501');
        await this.databank501stLegion.waitForClickable();
        await this.databank501stLegion.click();
        await expect(this.page501stLegion).toExist();
    }
}

export default new DatabankPage();