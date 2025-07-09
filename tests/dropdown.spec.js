const{test,expect} = require('@playwright/test')

test("Select values from Dropdown", async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Goa"})

    await page.waitForTimeout(5000)

    await page.locator('#state').selectOption({value:"Himachal Pradesh"})

    await page.waitForTimeout(5000)

    await page.locator('#state').selectOption({index:4})

    await page.waitForTimeout(5000)

    /*const value = await page.locator('#state').textContent()

    console.log("All drop down values " + value);

    await expect(value.includes("Kerala")).toBeTruthy()

    */

    let state = await page.$("#state")

    let allElements = await state.$$("option")

    let ddStatus=false

    for (let i =0; i<allElements.length;i++){

        let element= allElements[i]

        let value = await element.textContent()

        console.log("Value from dropdown using loop " + value)

        if(value.includes("Rajasthan"))
        {
            ddStatus = true
            break
        }

        
    }

    await expect(ddStatus).toBeTruthy()

    await page.locator('#hobbies').selectOption(['Playing', 'Reading','Swimming'])

    await page.waitForTimeout(5000)

})