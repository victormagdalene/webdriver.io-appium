
import { browser, expect } from '@wdio/globals';
import interestsPage from '../pageobjects/interests.page.js';
import landingPage from '../pageobjects/landing.page.js';
import { getInterestsFromJson } from '../helpers/interestsHelper.js';

describe('Select interests', () => {
  it('should select business, health and science', async () => {
    await landingPage.splash.waitForDisplayed({
      reverse: true,
      timeout: 10000,
    });

    await landingPage.btnLetsGo.click()
    
    const interests = getInterestsFromJson();

    for (const interest of interests) {
      const button = interestsPage.getInterestButton(interest);
     
      if (button) {
        await button.waitForDisplayed({ timeout: 5000 });
        await button.click();
      } 
    }

    await browser.pause(10000)
  });
});
