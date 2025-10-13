
import { browser, expect, driver } from '@wdio/globals';
import interestsPage from '../pageobjects/interests.page.js';
import landingPage from '../pageobjects/landing.page.js';
import { getInterests, getLookingFor, getMenu } from '../helpers/helper.js';
import testCases from '../data/testCases.js';
import lookingForPage from '../pageobjects/lookingFor.page.js';
import signInPage from '../pageobjects/signIn.page.js';
import mainPage from '../pageobjects/main.page.js';



describe('Somente randon tests', () => {
  testCases.forEach((caso) => {
    it(caso.description, async () => {

      await browser.reloadSession();

      await landingPage.splash.waitForDisplayed({
        reverse: true,
        timeout: 10000,
      });

      await landingPage.btnLetsGo.click();

      const interests = getInterests(caso);
      for (const interest of interests) {
        const button = interestsPage.getInterestButton(interest);
        if (button) {
          await button.waitForDisplayed({ timeout: 5000 });
          await button.click();
        }
      }

      await interestsPage.btnNext.click()

      const subjects = getLookingFor(caso);
      for (const subject of subjects) {
        const button = lookingForPage.getLookingForButton(subject);
        if (button) {
          await button.waitForDisplayed({ timeout: 5000 });
          await button.click();
        }
      }
      await lookingForPage.btnNext.click()
      await signInPage.btnSkip.click()


      const menus = getMenu(caso);
      for (const menu of menus) {
        const button = mainPage.getMenusButton(menu);

        if (button) {
          await button.waitForDisplayed({ timeout: 5000 });
          await button.click();
         
        }
      }

    });
  });
});

