import LoginPage from '../pages/loginpage.js'


describe('Login Page Suites ', () => {
    
    it('Login Test', async()=>{
        
        await browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')
    })

});