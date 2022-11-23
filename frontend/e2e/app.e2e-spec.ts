import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('Beeteller App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  beforeAll(() => {
    browser.driver.manage().window().maximize();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    page.browserSleep(1000);
    expect(page.getParagraphText('h3').getText()).toEqual('Olá! Bem vindo de volta.');
  });
});
