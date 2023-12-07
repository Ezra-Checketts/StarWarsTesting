import { $ } from '@wdio/globals';
import StarWarsPage from './starWarsPage.js';

class DatabankPage extends StarWarsPage {
    
    // Selectors:
    get phantomMenace() {return $('[alt="Star Wars: The Phantom Menace (Episode I)"]');}
    get battleDroid() {return $('[alt="Battle Droid"]');}
    get databankSearch() {return $('#searchField_SRP');}
    get databankSearchEnter() {return $('[value="Search"]');}
    get databank501stLegion() {return $('.title-link[href="https://www.starwars.com/databank/501st-legion"]');}
    get page501stLegion() {return $('//*[@class="long-title"][contains(text(), "501st Legion")]');}

    // Functions:

    async selectSWEp1() {
        await super.selectFilms();
        await this.phantomMenace.click();
    }

    async selectBattleDroid() {
        await this.selectSWEp1();
        await this.battleDroid.click();
    }

    async searchDatabank(query) {
        await super.selectDatabank();
        await this.databankSearch.setValue(query);
        await this.databankSearchEnter.click();
    }

    async select501stLegion() {
        await this.searchDatabank('501');
        await this.databank501stLegion.click();
        await expect(this.page501stLegion).toExist();
    }
}

export default new DatabankPage();