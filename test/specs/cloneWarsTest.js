import CloneWarsPage from '../pageobjects/cloneWarsPage.js'

describe('The website', () => {
    it('uses the search function to find a clone wars episode guide', async () => {
        await CloneWarsPage.selectCloneWarsEp('1','Trespass');
    })
})