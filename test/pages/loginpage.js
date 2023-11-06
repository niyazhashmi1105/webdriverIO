//import { $ } from '@wdio/globals'

class LoginPage{

    get username(){
            return $('#username')
    }

    get password(){
        return $('#password')
    }

    get loginButton(){
            return $("button[type='submit']")
    }

    get loginMessage(){
        return $('#flash')
    }

    async login(username, password){

        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.loginButton.click()
    }

    async checkMessage(msg){
        await expect(this.loginMessage).toHaveTextContaining(msg)
    }

}
export default new LoginPage();