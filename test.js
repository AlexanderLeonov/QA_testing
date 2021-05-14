// import {SearchPagePO} from "./po/search";
//
// require('chromedriver');
// const wd = require('selenium-webdriver');
//
//
//
// const driver = new wd.Builder()
//     .forBrowser('chrome')
//     .build();
//
// const po = new SearchPagePO(driver);
//
//
//
// async function test() {
//
//     await driver.get('https://www.google.com');
//
//     await driver.findElement(wd.By.name('q'))
//         .sendKeys('Hello WebDriver\n');
//
//     await driver.getTitle()
//         .then(t => {
//             console.log(t);
//         });
//
// }
//
// test();
