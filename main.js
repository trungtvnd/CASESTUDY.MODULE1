// let coach1 = new Coach(1, 'thainq')
// let coach2 = new Coach(2, 'Nguyen Thi Thu')
let accountCheck = ''
let user1 = new User('thainq', 'thainq', true)
let user2 = new User('thunt', 'thunt', false)
let admin = new User('admin', '123456', true)
let account1


function checkAccount(account) {

    account = document.getElementById('account').value
    account1 = document.getElementById('account').value
    let password = document.getElementById('password').value
    if (account === admin.getAccount() && password === admin.getPassword()) {
        document.getElementById('login').action = "index.html"
    } else if (account === user2.getAccount() && password === user2.getPassword()) {
        document.getElementById('login').action = "index.html"
    } else if (account === user1.getAccount() && password === user1.getPassword()) {
        document.getElementById('login').action = "index.html"
    } else {
        document.getElementById('login').action = "dangnhap.html"
        alert('Không tồn tại User hoặc password')
    }

}

console.log(account1)
console.log(accountCheck)



