import DatabankFilmPage from '../pageobjects/databankFilmPage.js'

describe('The website', () => {
    it('opens the battle droid page through the phantom menace page', async () => {
        await DatabankFilmPage.selectBattleDroid();
    })
})