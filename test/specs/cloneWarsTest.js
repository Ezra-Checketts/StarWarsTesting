import StarWarsPage from '../pageobjects/starWarsPage.js'

describe('The website', () => {
    it('uses the search function to find a clone wars episode guide', async () => {
        await StarWarsPage.selectCloneWarsEp('1','Trespass');
    })
})