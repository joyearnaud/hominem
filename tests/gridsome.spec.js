// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto('http://localhost:8080/fr/');

  // If the page doesn't return a successful response code, we fail the check
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }
    // await page.waitForSelector('#app > section > div > div.wordcloud.container-sm > div > div > div:nth-child(1) > div > span > div > a');
    const java = page.getByText('Java').first();
    const java2 = page.getByText('Java')[0];
    
    console.log(java);
    await expect(java).toHaveAttribute('href', '/skill/java/');

    const {name, category, keywords} = {name: page.locator('#__BVID__19 > tbody > tr:nth-child(1) > td:nth-child(1) > span'), category: page.locator('#__BVID__19 > tbody > tr:nth-child(1) > td:nth-child(2) > span'), keywords: page.locator('#__BVID__19 > tbody > tr:nth-child(1) > td:nth-child(3) > span')};
    await expect(name).toHaveText('ARCHIMATE');
    await expect(category).toHaveText('Architecture');
    await expect(keywords).toHaveText("Archi, BPMN, Référentiel d'architecture d'entreprise, UML");

    // We snap a screenshot.
    await page.waitForLoadState('domcontentloaded');
    await page.screenshot({ path: '.cache/playwright/screenshot_1.png', fullPage: true })

    const toto = await page.waitForSelector('#app > div:nth-child(1) > nav > div > a:nth-child(2)')
    console.log(toto.textContent);

    await page.click('#app > div:nth-child(1) > nav > div > a:nth-child(2)');
    await page.waitForLoadState('domcontentloaded');
    await page.screenshot({ path: '.cache/playwright/screenshot_2.png', fullPage: true });

    await page.click('#app > div:nth-child(1) > nav > div > a:nth-child(3)');
    await page.waitForLoadState('domcontentloaded');
    await page.screenshot({ path: '.cache/playwright/screenshot_3.png', fullPage: true });

    await page.click('#app > div:nth-child(1) > nav > div > a:nth-child(4)');
    await page.waitForLoadState('domcontentloaded');
    await page.screenshot({ path: '.cache/playwright/screenshot_4.png', fullPage: true });

  // // create a locator
  // const getStarted = page.getByText('Get Started');

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();
  
  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
