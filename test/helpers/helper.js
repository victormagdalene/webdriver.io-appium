
import interestsData from '../data/testCases';
import interestsPage from '../pageobjects/interests.page.js';
import lookingForPage from '../pageobjects/lookingFor.page.js';
import mainPage from '../pageobjects/main.page.js';


//extract interests from test cases module
export function getInterests(caso) {
  return caso.interests;
}
export function getLookingFor(caso) {
  return caso.subjects;
}
export function getMenu(caso) {
  return caso.menus;
}

//do the iteration among values from test cases
export async function selectInterests(caso) {
  const interests = getInterests(caso);
  for (const interest of interests) {
    const button = interestsPage.getInterestButton(interest);
    if (button) {
      await button.waitForDisplayed({ timeout: 5000 });
      await button.click();
    }
  }
  await interestsPage.btnNext.click();
}

export async function selectSubjects(caso) {
  const subjects = getLookingFor(caso);
  for (const subject of subjects) {
    const button = lookingForPage.getLookingForButton(subject);
    if (button) {
      await button.waitForDisplayed({ timeout: 5000 });
      await button.click();
    }
  }
  await lookingForPage.btnNext.click();
}

export async function selectMenus(caso) {
  const menus = getMenu(caso);
  for (const menu of menus) {
    const button = mainPage.getMenusButton(menu);
    if (button) {
      await button.waitForDisplayed({ timeout: 5000 });
      await button.click();
    }
  }
}
