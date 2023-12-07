import StarWarsPage from '../pageobjects/starWarsPage.js'

describe('The website', () => {
    it('uses the search function to find a hidden clone wars episode guide', async () => {
        await StarWarsPage.selectHiddenCloneWarsEp('1','Dooku Captured');
    })
})