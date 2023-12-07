import StarWarsPage from '../pageobjects/starWarsPage.js'

describe('The website', () => {
    it('opens the battle droid page through the phantom menace page', async () => {
        await StarWarsPage.selectBattleDroid();
    })
})