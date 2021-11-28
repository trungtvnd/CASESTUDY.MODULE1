let student_list = [['K14.1', 'Trần Việt Trung', '20/01/1992', 'Nam', 'trungtv@gmail.com', 'K14', 'Ngân hàng', 'NHTMD', '0383147758'],
    ['K14.2', 'Trần Văn Thanh', '10/03/1992', 'Nam', 'thanhtv@gmail.com', 'K14', 'Ngân hàng', 'NHTMD', '0382347758'],
    ['K14.3', 'Nguyễn Thị Hồng Thơm', '22/10/1993', 'Nu', 'thomnth@gmail.com', 'K14', 'Ngân hàng', 'NHTMD', '059716970']]


let indexExchange
let editid
let editname
let editbirth
let editemail
let edityear
let editdp
let editclassstudent
let editgender
let editphone

localStorage.setItem('students', 'Nguyen van a')

function display() {

    let table = "<table id='table'>"
    table += "<tr>" + "<td>" + "<b>" + "STT" + "</b>" + "</td>" + "<td>" + "<b>" + "Code Student" + "</b>" + "</td>" + "<td id='fullname1'>" + "<b>" + "Full name" + "</b>" + "</td>" +
        "<td>" + "<b>" + "Date of Birth" + "</b>" + "</td>" + "<td>" + "<b>" + "Gender" + "</b>" + "</td>" + "<td id='mail'>" + "<b>" + "Email" + "</b>" + "</td>" +
        "<td>" + "<b>" + "Acedemy Year" + "</b>" + "</td>" + "<td>" + "<b>" + "Department" + "</b>" + "</td>" + "<td>" + "<b>" + "Class student" + "</b>" + "</td>" +
        "<td>" + "<b>" + "Phone Number" + "</b>" + "</td>" + "<td colspan='3' style='color: red'>" + "Total sts:  " + student_list.length + "   " + "</td>" + "</tr>"
    for (let i = 0; i < student_list.length; i++) {
        table += "<tr>"
        table += "<td>" + (i + 1) + "</td>" + "<td>" + student_list[i][0] + "</td>" + "<td>" + student_list[i][1] + "</td>"
            + "<td>" + student_list[i][2] + "</td>" + "<td>" + student_list[i][3] + "</td>" + "<td>" + student_list[i][4] + "</td>"
            + "<td>" + student_list[i][5] + "</td>" + "<td>" + student_list[i][6] + "</td>" + "<td>" + student_list[i][7] + "</td>"
            + "<td>" + student_list[i][8] + "</td>" + "<td>" + "<button id='edit' value='edit' onclick='edit(" + i + ")'>" + "edit " + "</button>" + "</td>"
            + "<td>" + "<button id='delete' value='delete' onclick='deleteProduct(" + i + ")'>" + "delete" + "</button>" + "</td>"
        table += "</tr>"
    }
    table += "</table>"
    document.getElementById('student').innerHTML = table
}

function add() {

    let code = document.getElementById('id').value
    let fullname = document.getElementById('fullname').value
    let birth = document.getElementById('birth').value
    let email = document.getElementById('email').value
    let year = document.getElementById('year').value
    let dp = document.getElementById('dp').value
    let classStudent = document.getElementById('class').value
    let phone = document.getElementById('phone').value
    let gender = ''
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value
    }


    if (fullname === '' || birth === '' || year === '' || gender === '') {
        document.getElementById('error').innerHTML = 'Không được để trống thông tin'

    } else {
        document.getElementById('error').innerHTML = ''
        let list = [code, fullname, birth, gender, email, year, dp, classStudent, phone]
        if (checkTrung()) {
            alert('ID đã tồn tại')
        } else {
            student_list.push(list)
        }
        reset()
        display()
    }
}


function deleteProduct(index) {
    confirm('Bạn chắc muốn xóa bản ghi này chứ')
    student_list.splice(index, 1)
    display()
}


function edit(index) {
    let edit = student_list[index]
    indexExchange = index
    console.log(edit)
    document.getElementById('indexchange').value = index
    document.getElementById('id').value = edit[0]
    document.getElementById('fullname').value = edit[1]
    document.getElementById('birth').value = edit[2]
    document.getElementById('email').value = edit[4]
    document.getElementById('year').value = edit[5]
    document.getElementById('dp').value = edit[6]
    document.getElementById('class').value = edit[7]
    document.getElementById('male').value = edit[3]
    document.getElementById('female').value = edit[3]
    document.getElementById('phone').value = edit[8]
    editid = edit[0]
    editname = edit[1]
    editbirth = edit[2]
    editgender = edit[3]
    editemail = edit[4]
    edityear = edit[5]
    editdp = edit[6]
    editclassstudent = edit[7]
    editphone = edit[8]

    display()
}

function editStudent() {
    editid = document.getElementById('id').value
    editname = document.getElementById('fullname').value
    editbirth = document.getElementById('birth').value
    editgender = document.getElementById('male').value
    editgender = document.getElementById('female').value
    editemail = document.getElementById('email').value
    edityear = document.getElementById('year').value
    editdp = document.getElementById('dp').value
    editclassstudent = document.getElementById('class').value
    editphone = document.getElementById('phone').value
    student_list[indexExchange][0] = editid
    student_list[indexExchange][1] = editname
    student_list[indexExchange][2] = editbirth
    student_list[indexExchange][3] = editgender
    student_list[indexExchange][4] = editemail
    student_list[indexExchange][5] = edityear
    student_list[indexExchange][6] = editdp
    student_list[indexExchange][7] = editclassstudent
    student_list[indexExchange][8] = editphone
    confirm('Bạn có chắc muốn sửa bản ghi này chứ')
    display()
    reset()
}

function checkTrung() {
    for (let i = 0; i < student_list.length; i++) {
        let inputCode = document.getElementById('id').value
        if (inputCode === student_list[i][0]) {
            return true
        }
    }
}

function reset() {
    document.getElementById('id').value = ""
    document.getElementById('fullname').value = ""
    document.getElementById('birth').value = ""
    document.getElementById('email').value = ""
    document.getElementById('year').value = ""
    document.getElementById('dp').value = ""
    document.getElementById('class').value = ""
    document.getElementById('phone').value = ""
}

