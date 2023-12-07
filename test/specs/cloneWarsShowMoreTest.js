import CloneWarsPage from '../pageobjects/cloneWarsPage.js'

describe('The website', () => {
    it('uses the search function to find a hidden clone wars episode guide', async () => {
        await CloneWarsPage.selectHiddenCloneWarsEp('1','Dooku Captured');
    })
})