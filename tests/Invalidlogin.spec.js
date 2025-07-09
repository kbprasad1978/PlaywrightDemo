const {test,expect} = require('@playwright/test')


test("Valid Login",async function({page}){




    await page.goto("http://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)

    console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").fill("Admin", {delay:500})

    await page.locator("input[name='password']").fill("test123",{delay:100})

    await page.locator("//button[@type='submit']").click()

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

    console.log("Error Message is " + errorMessage);

    expect(errorMessage.includes("Invalid")).toBeTruthy()

    expect(errorMessage === "Invalid credential").toBeFalsy()

})

