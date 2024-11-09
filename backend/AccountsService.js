import Account from './AccountsScheme.js'

class AccountsService{
    async createAccount(name,surname,lastname,password,userRole){
        const newAccount = await Account.create({name,surname,lastname,password,userRole})
        return newAccount
    }
    async validate(account){
        console.log(account)
        if(!account){
            throw new Error ('Login or password wrong')
        }
        const post = await Account.findOne(account)
        return post
    }
}

export default new AccountsService()