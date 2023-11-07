//const {browser,$,$$} = require('@wdio/globals')

describe('Handle Alert', async()=>{

it('Alert TC', async()=>{
    
    await browser.maximizeWindow()
    await browser.url('https://mail.rediff.com/cgi-bin/login.cgi')
    await(await $("//input[@name='proceed']")).click()
    const alertText = await browser.getAlertText()
    console.log("Alert: ", alertText)
    await browser.acceptAlert()
    await expect(alertText).toBe("Please enter a valid user name")

    
})

});