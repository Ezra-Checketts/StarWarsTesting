import DatabankPage from '../pageobjects/databankPage.js'

describe('The website', () => {
    it('opens the battle droid page through the phantom menace page', async () => {
        await DatabankPage.selectBattleDroid();
    })
})