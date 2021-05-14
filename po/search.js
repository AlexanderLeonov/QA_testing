module.exports = {

    SearchPagePO: function () {

        this.openSearchPage = function () {
            return browser.driver.get('https://www.google.com');
        }

        this.search = function (text) {
            return this.findSearchBox()
                .sendKeys(text + protractor.Key.ENTER)
                .then(() => browser.sleep(1000));
        }

        this.findSearchBox = function () {
            return browser.driver.findElement(by.name('q'));
        }

        this.findSearchResults = function () {
            return browser.driver.findElements(by.css('.main #center_col #search #rso .g'));
        }

        this.findResultLink = function (el) {
            return el.findElement(by.css('.yuRUbf a')).getAttribute("href");
        }

        this.findResultMainText = function (el) {
            return el.findElement(by.css('.yuRUbf a h3')).getText();
        }

        this.getPageTitle = function () {
            return browser.driver.getTitle();
        }

        return this;

    }

};
