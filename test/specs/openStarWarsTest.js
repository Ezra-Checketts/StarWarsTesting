import StarWarsPage from '../pageobjects/starWarsPage.js'

describe('The browser', () => {
    it('should open starwars.com', async () => {
        await StarWarsPage.openStarWars();
    })
})

