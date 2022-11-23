import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo(address) {
        return browser.get(address);
    }

    getParagraphText(selector) {
        return element(by.css(selector));
    }

    getElementById(id) {
        return element(by.id(id));
    }

    browserSleep(time) {
        browser.sleep(time);
    }

}
