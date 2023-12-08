import DatabankPage from '../pageobjects/databankPage.js'

describe('The website', () => {
    it('finds the 501st databank page through the databank', async () => {
        await DatabankPage.select501stLegion();
    })
})