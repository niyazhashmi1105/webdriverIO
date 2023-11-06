const {browser,$,$$} = require('@wdio/globals')


describe('Dropdown handling', ()=>{

    it('Dropdown-SelectByAttribute', async()=>{

        browser.url('https://www.facebook.com/')
        const createNewButton = await $("//a[text()='Create new account']")
        await createNewButton.click()
        const month = await $('#month')
        await month.selectByAttribute('value','12')
        
        const selectedVal =  await month.getValue()
        console.log(selectedVal)
        expect(selectedVal).toBe("12")
})


it('Dropdown-SelectByIndex', async()=>{

    browser.maximizeWindow()
    browser.url('https://www.facebook.com/')
    const createNewButton = await $("//a[text()='Create new account']")
    await createNewButton.click()

    const date = await $('#day')
    await date.selectByIndex(14)
    const selectedDate = await date.getValue()
    console.log("Date: "+selectedDate)
    await expect(selectedDate).toBe("15")

    const month = await $('#month')
    await month.selectByIndex(10)
    const selectedMonth =  await month.getValue()
    console.log("Month: "+selectedMonth)
    await expect(selectedMonth).toBe("11")
})


it.only('Dropdown-SelectByVisibleText', async()=>{

    browser.maximizeWindow()
    browser.url('https://www.facebook.com/')
    const createNewButton = await $("//a[text()='Create new account']")
    await createNewButton.click()

    const date = await $('#day')
    await date.selectByVisibleText("15")
    const selectedDate = await date.getValue()
    console.log("Date: "+selectedDate)
    await expect(selectedDate).toBe("15")

    const month = await $('#month')
    await month.selectByVisibleText("Nov")
    const selectedMonth =  await month.getValue()
    console.log("Month: "+selectedMonth)
    await expect(selectedMonth).toEqual("11")

    await browser.pause(3000)

    const year = await $('#year')
    await year.selectByVisibleText("2020")
    const selectedYear = await year.getValue()
    console.log('Year: ',selectedYear)
    await expect(selectedYear).toBe('2020')
})




})