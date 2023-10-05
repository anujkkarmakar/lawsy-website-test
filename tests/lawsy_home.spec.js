const {test, expect} = require('@playwright/test');

test('Test the title of Website', async({page}) => {
    await page.goto('https://anujk.co')

    //Except the title to conatin a substring Lawsy
    await expect(page).toHaveTitle(/Lawsy/)
})

test('Test the nav bar of the websites', async ({ page }) => {
  await page.goto('https://anujk.co/');
  await page.getByRole('link', { name: 'HOME' }).click();
  await page.getByRole('link', { name: 'CONTENTS' }).click();
  await page.getByRole('link', { name: 'ABOUT US' }).click();
  await page.getByRole('link', { name: 'FAQs' }).click();
  await page.getByRole('link', { name: 'HOME' }).click();
});