
const po = require('../po/search').SearchPagePO();

describe('search page', () => {

    beforeEach(async function test() {
        await po.openSearchPage();
    });

    it('should open search page', async function spec() {
        expect(po.getPageTitle()).toEqual('Google');
    });

    it('should show search box', async function spec() {
        const element = await po.findSearchBox();
        expect(element.getTagName()).toBe('input');
    });

    it('should search for Sergey Efremov', async function spec() {
        await po.search('Sergey Efremov QA');
        const title = await po.getPageTitle();
        expect(title).toEqual('Sergey Efremov QA - Поиск в Google');
    });

    it('should find some results', async function spec() {
        await po.search('Sergey Efremov QA');
        const results = await po.findSearchResults();
        expect(results.length).toBeGreaterThan(0);
    });

    it('should show Sergey Efremov\'s first result with url', async function spec() {
        await po.search('Sergey Efremov QA');
        const results = await po.findSearchResults();
        const resultLink = await po.findResultLink(results[0])
        expect(resultLink).toEqual('https://www.linkedin.com/in/sefremoff');
    });

    it('should show Sergey Efremov\'s linkedin with text', async function spec() {
        await po.search('Sergey Efremov QA');
        const results = await po.findSearchResults();
        const resultText = await po.findResultMainText(results[0])
        expect(resultText).toContain('Sergey Efremov - Senior Software QA Automation');
    });

});

