import HiddenCloneWarsPage from '../pageobjects/cloneWarsShowMorePage.js'

describe('The website', () => {
    it('uses the search function to find a hidden clone wars episode guide', async () => {
        await HiddenCloneWarsPage.selectHiddenCloneWarsEpisode('1','Dooku Captured');
    })
})