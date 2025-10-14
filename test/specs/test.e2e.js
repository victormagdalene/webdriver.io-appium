
import { browser, expect, driver } from '@wdio/globals';
import landingPage from '../pageobjects/landing.page.js';
import * as helper from '../helpers/helper.js';
import testCases from '../data/testCases.js';
import signInPage from '../pageobjects/signIn.page.js';



describe('Some random tests selecting somente options', () => {
  testCases.forEach((caso) => {
    it(caso.description, async () => {

      await browser.reloadSession();

      await landingPage.splash.waitForDisplayed({
        reverse: true,
        timeout: 10000,
      });

      await landingPage.btnLetsGo.click();

      await helper.selectInterests(caso)
  
      await helper.selectSubjects(caso)
 
      await signInPage.btnSkip.click()

      await helper.selectMenus(caso)

    });
  });
});

