const {test, expect} = require('@playwright/test');

test('Test the title of Website', async({page}) => {
    await page.goto('https://anujk.co')

    //Except the title to conatin Lawsy
    await expect(page).toHaveTitle('Lawsy')
})