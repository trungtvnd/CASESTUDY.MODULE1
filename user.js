class User {
    account
    password
    level

    constructor(account, password, level) {
        this.account = account
        this.password = password
        this.level = level
    }

    getAccount() {
        return this.account
    }

    getPassword() {
        return this.password
    }

    checkLevel(account) {
        return this.level

    }
}