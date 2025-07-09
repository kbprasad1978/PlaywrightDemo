const{test,expect} = require('@playwright/test')

test("Verify Application Title",async function({page}) {
    await page.goto("https://google.com")

    const url = await page.url()

    console.log("Title is " + url)

    const title = await page.title()

    console.log("Title is " + url)

    await expect(page).toHaveTitle("Google")


    
})