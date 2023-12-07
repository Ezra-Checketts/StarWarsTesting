import StarWarsPage from '../pageobjects/starWarsPage.js'

describe('The website', () => {
    it('finds the 501st databank page through the databank', async () => {
        await StarWarsPage.select501stLegion();
    })
})