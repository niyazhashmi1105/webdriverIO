
describe('First Test Suite', async()=>{

it('First TC', async()=>{
    
    await browser.maximizeWindow()
    browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(browser).toHaveUrlContaining('opensource')  
    await $("//input[@name='username']").setValue('Admin')
    await $("//input[@name='password']").setValue('admin123')
    await $("button[type='submit']").click()
    await expect(browser).toHaveUrlContaining('dashboard')
})
it('Multiple Elements', async()=>{
    
    await browser.maximizeWindow()
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const links = await $$("//div[@class='orangehrm-login-footer-sm']/a")
    console.log('Links count ', links.length);
    //await expect(links.length).toBeElementsArrayOfSize(4)
})





})