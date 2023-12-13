import { browser } from '@wdio/globals';

export default class BasePage {
    // Opens a specified url by combining a site and path
    openUrl(site, path) {
        const url = `${site}${path}`;
        try {
            return browser.url(url);
        } catch (error) {
            console.error(`Failed to open URL: ${url}`, error);
            throw error;
        }
    }

    // Opens the Star Wars website by calling openUrl with a predefined path
    openStarWars() {
        return this.openUrl('https://starwars.com/', '');
    }

    // Handles errors by logging the error and rethrowing it
    async handleError(action, error) {
        console.error(`Error during ${action}:`, error);
        throw error;
    }

    async waitForClickableAndClick(element) {
        await element.waitForClickable();
        await element.click();
    }
}