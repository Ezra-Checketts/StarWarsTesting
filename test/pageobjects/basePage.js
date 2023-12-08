import { browser } from '@wdio/globals';

export default class BasePage {
    openUrl (site, path) {
        return browser.url(`${site}${path}`);
    }

    openStarWars () {
        return this.openUrl('https://starwars.com/', '');
    }
}
