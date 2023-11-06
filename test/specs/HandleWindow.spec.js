//const {browser,$,$$} = require('@wdio/globals')

describe('Handle Window' ,()=>{

it('Handle Window TC', async()=>{
    
    await browser.maximizeWindow()
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await browser.pause(3000)
    await (await $("//a[@href='https://www.linkedin.com/company/orangehrm/mycompany/']")).click()
    
    await browser.switchWindow("linkedin.com")
    await browser.pause(3000)
        
    const element = await $("//a[@class='contextual-sign-in-modal__join-link']")
    /*await element.waitUntil( async function(){ return (this.getText()) === 'Join now'
    },
{
    timeout:10000,
    timeoutMsg: 'element not displayed'
}) */
    await element.click()
    await(await $("//input[@name='email-or-phone']")).setValue('niyazhashmi161921@gmail.com')
    
    await browser.switchWindow("OrangeHRM")
    await (await $("//input[@name='username']")).setValue('Admin')
    await browser.switchWindow("linkedin.com")
    await browser.closeWindow()

    
})

});